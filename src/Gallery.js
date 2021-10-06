import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const Gallery = ({ galleryImages }) => {
  const [expandedImageIndex, setExpandedImageIndex] = useState('');
  const [containerStyle, setContainerStyle] = useState({ display: 'none' });
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (expandedImageIndex < galleryImages.length - 1) {
        setExpandedImageIndex(expandedImageIndex + 1);
      }
    },
    onSwipedRight: () => {
      if (expandedImageIndex > 0) {
        setExpandedImageIndex(expandedImageIndex - 1);
      }
    },
  });
  return (
    <div className="gallery">
      {galleryImages.map((image, index) => {
        return (
          <div className="gallery-item" key={index}>
            <img
              alt=""
              className="gallery-image"
              src={image}
              onClick={() => {
                setExpandedImageIndex(index);
                setContainerStyle({ display: 'block' });
              }}
            />
          </div>
        );
      })}
      <div {...handlers} class="container" style={containerStyle}>
        <div
          onClick={() => {
            console.log('clicked');
            setContainerStyle({ display: 'none' });
          }}
          class="closebtn"
        >
          &times;
        </div>
        <div class="image-container">
          <img
            id="expandedImg"
            src={galleryImages[expandedImageIndex]}
            onClick={() => {
              if (expandedImageIndex < galleryImages.length - 1) {
                setExpandedImageIndex(expandedImageIndex + 1);
              }
            }}
            alt=""
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
