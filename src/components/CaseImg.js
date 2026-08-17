import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import './CaseImg.css';

const CaseImg = forwardRef(
  ({ src, caption, alt = '', index, onClick, className = '' }, ref) => {
    const handleClick = () => {
      if (typeof onClick === 'function') {
        onClick(index);
      }
    };
    return (
      <div className={`case-img ${className}`} ref={ref}>
        <img
          className="case-img__img"
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onClick={handleClick}
          style={{ cursor: 'pointer' }}
        />
        {caption && <div className="case-img__caption">{caption}</div>}
      </div>
    );
  }
);

CaseImg.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string,
  alt: PropTypes.string,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default CaseImg;
