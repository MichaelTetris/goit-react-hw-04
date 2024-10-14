import { useState } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImagesList from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/loader";

const api_url = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 16;

function App() {
  /* console.log("key", import.meta.env.VITE_API_KEY); */

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (searchTerm) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${api_url}`, {
        params: {
          query: searchTerm,
          client_id: import.meta.env.VITE_API_KEY,
          per_page: IMAGES_PER_PAGE,
        },
      });
      setImages(response.data.results);
      console.log(response);
    } catch (error) {
      console.error("Error fetching data from Unsplash", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="div_head">
      <SearchBar onClick={handleSubmit} />
      {isLoading ? <Loader /> : images.length > 0 && <ImagesList images={images} />}
    </div>
  );
}

export default App;
