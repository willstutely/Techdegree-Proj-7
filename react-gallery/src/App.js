import React, { Component } from 'react';
import axios from 'axios';

import SearchForm from './components/SearchForm';
import Gallery from './components/Gallery';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    }
  }

  componentDidMount() {
    this.performSearch();
  }
  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=2a0d8a6f0e2287f8a61b2a7c73b47611&text=${query}&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <div className="container" >
        <SearchForm onSearch={this.performSearch} />
        <Gallery data={this.state.photos} />
      </div>
    )
  }
}
