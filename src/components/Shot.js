import React from 'react'
import './Shot.css'

export default function Shot({ src, caption }) {
  return (
    <div className="shot">
      {src && <img src={src} alt={caption || 'Shot'} className="shot-image" />}
      {caption && <p className="shot-caption">{caption}</p>}
    </div>
  );
}
