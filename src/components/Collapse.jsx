import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Collapse.scss';
import ArrowIcon from '../assets/ArrowIcon.svg'; // Assurez-vous d'importer votre SVG

const Collapse = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <button onClick={toggle} className={`collapse-button ${isOpen ? 'open' : ''}`}>
        {label}
        <img src={ArrowIcon} alt="arrow icon" className="arrow" />
      </button>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
};

Collapse.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Collapse;
