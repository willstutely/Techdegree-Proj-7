import React, { useState, useEffect, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

// importing Flickr api key from the hidden config.js file
import apiKey from './config';

// Import components to use in return statement
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import UnmatchedURL from './components/UnmatchedURL';

// App component which handles app state, contains the search function, and renders the app
const App = () => {
  // Store Nav button search terms in variables to keep the performSearch function cleaner
  const gsp = "german shorthaired pointer";
  const goldens = "golden retriever";
  const collie = "collie puppy";

  // State of each of the fixed Nav buttons
  const [photosGSP, setPhotosGSP] = useState([]);
  const [photosGoldens, setPhotosGoldens] = useState([]);
  const [photosCollie, setPhotosCollie] = useState([]);

  // State for the search feature. Default state is set to 'cows' because
  // Gary Larson was right... there has to be more to cows than what we see
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("cows");

  // Search function: fetches data from Flickr using Axios, and updates relevant state based on search term
  const performSearch = useCallback(query => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&tags=${query}&safe_search=1&content_type=1&format=json&nojsoncallback=1`)
      .then(response => {
        const data = response.data.photos.photo;
        if (query === searchTerm) {
          setPhotos(data)
          setLoading(false)
        }
        if (query === gsp) {
          setPhotosGSP(data)
        }
        if (query === goldens) {
          setPhotosGoldens(data)
        }
        if (query === collie) {
          setPhotosCollie(data)
        }
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    }, 
    [searchTerm]
  );

  // useEffect hook calls the performSearch function whenever a change in searchTerm state is detected
  useEffect(() => {
    setLoading(true)
    performSearch(searchTerm)
    
  }, [searchTerm, performSearch, setLoading])

  // useEffect hook calls performSearch on app load for the preset Nav options.
  // It conditionally checks the state of each option and if empty calls the function
  // This allows the Nav buttons to toggle back and forth between already loaded data
  // instead of continually fetching new data
  useEffect(() => {
    if (Object.keys(photosGSP).length === 0) {
      performSearch(gsp)
    }
    if (Object.keys(photosGoldens).length === 0) {
      performSearch(goldens)
    }
    if (Object.keys(photosCollie).length === 0) {
      performSearch(collie)
    }
  }, [performSearch, photosCollie, photosGSP, photosGoldens]);

  return (
    <div className="container" >
      <SearchForm setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
      <Nav />
      {/* Ternary Operator checks if the page loading state is true or false and conditionally displays a loading message */}
      {loading
      ? <p>Loading...</p>
      : <Routes>
        <Route path="/" exact element={<Gallery data={photos} searchTerm={searchTerm} />} />
        <Route path="/search/:id" element={<Gallery data={photos} searchTerm={searchTerm} />} />
        <Route path="/german shorthaired pointer" element={<Gallery data={photosGSP} searchTerm={gsp} />} />
        <Route path="/golden retriever" element={<Gallery data={photosGoldens} searchTerm={goldens} />} />
        <Route path="/collie puppy" element={<Gallery data={photosCollie} searchTerm={collie} />} />
        <Route path="*" element={<UnmatchedURL />} />
      </Routes>
      }
    </div>
  )
}

export default App;