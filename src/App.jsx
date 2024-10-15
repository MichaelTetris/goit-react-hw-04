import { useState, useRef } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImagesList from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMore from "./components/LoadMoreBtn/LoadMoreButton";

const api_url = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 16;

function App() {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState(null);


  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const galleryRef = useRef(null);

  const handleSubmit = async (term) => {
    setIsLoading(true);
    setError(false);
    setPage(1);
    setSearchTerm(term);
    try {
      const response = await axios.get(`${api_url}`, {
        params: {
          query: term,
          client_id: import.meta.env.VITE_API_KEY,
          per_page: IMAGES_PER_PAGE,
          page: 1,
        },
      });
      setImages(response.data.results);
      setTotalPages(Math.ceil(response.data.total / IMAGES_PER_PAGE));
      console.log(response);
    } catch (error) {
      console.log("Error fetching data from Unsplash", error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = async () => {

    const nextPage = page + 1;
    setIsLoading(true);
    try {
      const response = await axios.get(`${api_url}`, {
        params: {
          query: searchTerm,
          client_id: import.meta.env.VITE_API_KEY,
          per_page: IMAGES_PER_PAGE,
          page: nextPage,
        },
      });
      
      setImages((prevImages) => [...prevImages, ...response.data.results]);
      setPage((prevPage) => prevPage + 1);

      /* if (galleryRef.current) {
        newImages.forEach((image) => {
          const imgElement = document.createElement("img");
          imgElement.src = image.urls.thumb;
          imgElement.alt = image.alt_description;
          imgElement.key = image.id;
          galleryRef.current.appendChild(imgElement);
        });
      } */
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="div_head">
      <SearchBar onClick={handleSubmit} />
      {searchTerm !== 0 && <p>Result search "{searchTerm}"</p>}
      {!isLoading && error && <ErrorMessage />}
      {!isLoading && !error && images.length > 0 && (
        <ImagesList images={images} />
      )}
      {!isLoading && !error && images.length > 0 && page < totalPages && (
        <LoadMore onClick={handleLoadMore} />
      )}
      {isLoading && <Loader />}
    </div>
  );
}

export default App;
