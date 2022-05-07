import * as React from "react";

const Gallery = (props) => {
  const context = props.pageContext;
  return (
    <div>
      {context.name}
      {context.photos.map((item, index) => (
        <div>{item}</div>
      ))}
    </div>
  );
};

export default Gallery;
