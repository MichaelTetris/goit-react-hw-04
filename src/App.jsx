import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImagesList from "./components/ImageGallery/ImageGallery";

const api_url = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 20;

function App() {
  console.log("key", import.meta.env.VITE_API_KEY);
  const [searchTerm, setSearchTerm] = useState("");
  const [images, setImages] = useState([]);

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    const response = await axios(`${api_url}?query=${searchTerm}&client_id=${import.meta.env.VITE_API_KEY}`);
    const data = await response.json();
    /* setImages(data.results) */;
    console.log(data.results);
  };

  return (
    <div className="div_head">
      <SearchBar onClick={handleSubmit} />
      <ImagesList images={images} />
    </div>
  );
}

export default App;
