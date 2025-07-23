import React, { Component } from 'react'
import './Shot.css'

export default class Shot extends Component {
  render() {
    const { src, caption } = this.props;
    return (
      <div className="shot">
        {src && <img src={src} alt={caption || 'Shot'} className="shot-image" />}
        {caption && <p className="shot-caption">{caption}</p>}
      </div>
    );
  }
}
