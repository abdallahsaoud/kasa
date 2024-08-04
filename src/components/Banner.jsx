// Banner.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Banner.scss';

const Banner = ({ text, image }) => (
  <div className="banner">
    <div className="banner-image" style={{ backgroundImage: `url(${image})` }}>
      <h1>{text}</h1>
    </div>
  </div>
);

Banner.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Banner;
