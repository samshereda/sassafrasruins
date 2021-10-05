import React, { useEffect, useState } from 'react';

export const GalleryItem = ({ children }) => {
  console.log(children);
  return <div className="gallery-item">{children}</div>;
};

const Gallery = ({ children }) => {
  return (
    <div className="gallery">
      {React.Children.map(children, (child, index) => {
        console.log(child);
        return React.cloneElement(child);
      })}
    </div>
  );
};

export default Gallery;
