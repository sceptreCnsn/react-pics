import React from "react";

class SearchBar extends React.Component {
  onInputChange = e => {
    this.props.onChange(e.target.value);
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(e.target.value);
  };

  render() {
    return (
      <div className="ui segment" style={{ marginTop: "10px" }}>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <label className="ui big">Search Photos</label>
          <div className="field">
            <input type="text" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

SearchBar.defaultProps = {
  onChange: () => {},
  onSubmit: () => {}
};

export default SearchBar;
