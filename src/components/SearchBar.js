import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onInputChange = e => {
    this.props.onChange(e.target.value);
    this.setState({term:e.target.value});
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment" style={{ marginTop: "10px" }}>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <label className="ui big">Search Photos</label>
          <div className="field">
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
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
