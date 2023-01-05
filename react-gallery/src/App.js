import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import apiKey from './config';

import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import UnmatchedURL from './components/UnmatchedURL';

const App = () => {
  const [photos, setPhotos] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("cats");

  const performSearch = (searchTerm) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${searchTerm}&tags=${searchTerm}&safe_search=1&content_type=1&format=json&nojsoncallback=1`)
      .then(response => {
        setPhotos(response.data.photos.photo)
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  useEffect(() => {
    return performSearch()
  }, [])

  return (
    <BrowserRouter>
      <div className="container" >
      <SearchForm onSearch={performSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Nav />
        <Routes>
          <Route path="/" element={<Gallery data={photos} searchTerm={searchTerm} />}/>
          
          <Route path="*" element={<UnmatchedURL />} />

        </Routes>


      </div>
    </BrowserRouter>
  )
}


export default App;





