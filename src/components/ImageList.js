import "../components/ImageList.css";
import React from "react";

class ImageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: null };
  }

  render() {
    const list = this.props.images.map(({ id, description, urls }) => {
      return (
        <img
          key={id}
          src={urls.regular}
          alt={description}
          style={{ width: "100%" }}
        />
      );
    });
    return (
      <div className="image-list-wrapper">
        <div className="image-list">{list}</div>
      </div>
    );
  }
}

export default ImageList;
