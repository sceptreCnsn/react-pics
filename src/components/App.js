import React from "react";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { message: "Hello", keyword:'' };

  onChange = (term) => {
    this.setState({keyword:term});
  }

  render() {
    return (
      <div className="ui container">
        {this.state.keyword}
        <SearchBar onChange={this.onChange}/>
        <ImageList />
      </div>
    );
  }
}

export default App;