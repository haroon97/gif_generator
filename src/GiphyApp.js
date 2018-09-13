import React from 'react';
import Header from './Header.js';
import SearchGif from './SearchGif.js';
import Gifs from './Gifs.js';
import './GiphyApp.css'

class GiphyApp extends React.Component {
  state = {
    gifs: [],
    search: '',
    isLoading: false,
    error: false
  }

  onSearch = (e) => {
    this.setState( {search: e.target.value} )
  }

  searchGif = (e) => {
    e.preventDefault();
    const api_key = 'MdCIcrpEuyDYJL7zPHf9ApeJhJTUxE8t';
    const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=${api_key}&limit=10`;
    if (e.target.elements.search.value === '') {
      this.setState ( {error: true,
                      isLoading: false} )
    }
    else {
      e.target.elements.search.value = '';
      fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return this.setState ({gifs: data.data} )
      }).then(() => this.setState( {isLoading: false,
                                    error: false} ))
      .catch((error) => {
        console.log('error', error);
      })
      }
    }


  componentDidMount() {
    this.setState({ isLoading: true });
  }


  render() {
    const title = 'Giphy App';
    const subTitle = 'To generate amazing gifs for you';
    return (
      <div>
        <Header title={title} subTitle={subTitle}/>
        <SearchGif onSearch={this.onSearch} gifSearch={this.searchGif} />
        {this.state.error && <p className='error'>Please enter a valid value</p>}
        {this.state.gifs.length > 0 && <Gifs gifsList={this.state.gifs}/>}
        {this.state.isLoading && <h1 className='loading'>Loading Gif's</h1>}
        {console.log(this.state.error)}
      </div>
    );
  }
}

export default GiphyApp;