import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import apiKey from './config';

import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import UnmatchedURL from './components/UnmatchedURL';

const App = () => {
  const [photos, setPhotos] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("dogs");

  const performSearch = (searchTerm) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${searchTerm}&tags=${searchTerm}&safe_search=1&content_type=1&format=json&nojsoncallback=1`)
      .then(response => {
        console.log(searchTerm)
        setPhotos(response.data.photos.photo)
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  useEffect(() => {
    return performSearch(searchTerm)
  }, [searchTerm])

  return (
    <div className="container" >
      <SearchForm setSearchTerm={setSearchTerm} />
      <Nav />
      <Routes>
        <Route path="/" element={<Gallery data={photos} searchTerm={searchTerm} />} />
        <Route path="/:url" element={<Gallery data={photos} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
        <Route path="/:url" element={<Gallery data={photos} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
        <Route path="/:url" element={<Gallery data={photos} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
        <Route path="*" element={<UnmatchedURL />} />
      </Routes>
    </div>

  )
}


export default App;





