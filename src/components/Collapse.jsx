import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Collapse.scss';
import ArrowIcon from '../assets/ArrowIcon.svg';

const Collapse = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <button onClick={toggle} className={`collapse-button ${isOpen ? 'open' : ''}`}>
        {label}
        <img src={ArrowIcon} alt="arrow icon" className="arrow" />
      </button>
      <div
        ref={contentRef}
        className={`collapse-content ${isOpen ? 'open' : ''}`}
      >
        {children}
      </div>
    </div>
  );
};

Collapse.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Collapse;
