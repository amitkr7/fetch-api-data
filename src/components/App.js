import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (text) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: text },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className='ui container'>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found:{this.state.images.length} Images
      </div>
    );
  }
}

export default App;
