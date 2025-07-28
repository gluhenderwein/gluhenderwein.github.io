import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

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
          className="embla__slide__img"
          src={src}
          alt={alt}
          onClick={handleClick}
          style={{ cursor: 'pointer' }}
        />
        {caption && <div className="embla__slide__caption">{caption}</div>}
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
