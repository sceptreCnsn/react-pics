import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {x:null};
  }

  render() {
    return (
      <div>
        <form>
          <input type="text"></input>
        </form>
      </div>
    );
  }
}

export default SearchBar;