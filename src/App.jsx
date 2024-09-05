import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import ImagesList from './components/ImageGallery/ImageGallery';


const UNSPLASH_ACCESS_KEY = 'R7G3LYzZqzcQEAMZexCuTpIWyDnX3B7qzRy4bx2A85M';
axios.defaults.headers.common['Authorization'] = 'Client-ID{UNSPLASH_ACCESS_KEY}'

function App() {

  useEffect(() => {
    // 1. Оголошуємо асинхронну функцію
    async function fetchDataSearch() {
      // Тут будемо виконувати HTTP-запит
      const response = await axios.get(
        "https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}"
      );
    }
    fetchDataSearch();
  },[]);

  

  return (
    <div className='div_head'>
      <SearchBar/>
      <ImagesList/>
      
    </div>
  )
}

export default App
