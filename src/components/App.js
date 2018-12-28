import React from "react";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";
import unsplash from '../api/unsplash';

class App extends React.Component {
  state = { images: [] };

  searchPhotos = async keyword => {
    let response = await unsplash.get('/search/photos', {
      params: {
        query: keyword
      }
    });
    console.log(response);
    this.setState({ images: response.data.results });
  };

  onSubmit = term => {
    this.searchPhotos(term);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSubmit} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
