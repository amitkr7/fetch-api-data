import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  async onSearchSubmit(text) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: text },
      headers: {
        Authorization: 'Client-ID ZqR4iG5KGL2JYvsylUPI2n5Ai1oTm4ulBj7ql38UKBk',
      },
    });
    console.log(response.data.results);
  }
  render() {
    return (
      <div className='ui container'>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
