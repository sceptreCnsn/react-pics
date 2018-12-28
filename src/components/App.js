import React from "react";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "Hello" };
  }

  render() {
    return (
      <div>
        <SearchBar />
        <ImageList />
      </div>
    );
  }
}

export default App;