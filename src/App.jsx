import { useState } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImagesList from "./components/ImageGallery/ImageGallery";

const api_url = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 20;

function App() {
  /* console.log("key", import.meta.env.VITE_API_KEY); */

  /* const [searchTerm, setSearchTerm] = useState(""); */
  const [images, setImages] = useState([]);

  const handleSubmit = async (searchTerm) => {
    console.log(searchTerm)
    try {
      const response = await axios.get(`${api_url}`, {
        params: {
          query: searchTerm,
          client_id: import.meta.env.VITE_API_KEY,
          per_page: IMAGES_PER_PAGE,
        },
      });
      setImages(response.data.results);
      console.log(images);
    } catch (error) {
      console.error("Error fetching data from Unsplash", error);
    }
  };

  return (
    <div className="div_head">
      <SearchBar onClick={handleSubmit} />
      <ImagesList images={images} />
    </div>
  );
}

export default App;
