import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] };

  async onSearchSubmit(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID fa0215d5b42ccde9beb8737b7a88f6b287697768ac4227a1d248775815dce9bd'
      }
    });

    this.setState ({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
