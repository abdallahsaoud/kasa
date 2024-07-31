import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Gallery.scss';
import leftArrow from '../assets/left-arrow.svg';
import rightArrow from '../assets/right-arrow.svg';

const Gallery = ({ pictures }) => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent(current === 0 ? pictures.length - 1 : current - 1);
  };

  const handleNext = () => {
    setCurrent(current === pictures.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="gallery">
      <img src={pictures[current]} alt={`slide ${current + 1}`} />
      {pictures.length > 1 && (
        <>
          <button className="arrow left" onClick={handlePrev}>
            <img src={leftArrow} alt="Previous" />
          </button>
          <button className="arrow right" onClick={handleNext}>
            <img src={rightArrow} alt="Next" />
          </button>
        </>
      )}
      {pictures.length > 1 && (
        <div className="gallery__counter">
          {current + 1}/{pictures.length}
        </div>
      )}
    </div>
  );
};

Gallery.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Gallery;
