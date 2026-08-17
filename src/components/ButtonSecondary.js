import React, { Component } from 'react'
import './Button.css'
import { HugeiconsIcon } from '@hugeicons/react';

export default class ButtonSecondary extends Component {
  constructor(props) {
    super(props);
    this.buttonRef = React.createRef();
  }

  componentDidMount() {
    const button = this.buttonRef.current;
    if (!button) return;

    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      button.style.setProperty('--x', `${x}px`);
      button.style.setProperty('--y', `${y}px`);
    });
  }

  render() {
    const buttonContent = (
      <>
        {this.props.icon && (
          <HugeiconsIcon
            className='icon-btn'
            icon={this.props.icon}
            size={24}
            color=""
            strokeWidth={2}
          />
        )}
        <span className="button-label">{this.props.label || 'макеты в figma'}</span>
      </>
    );

    return (
      <div className="container">
        {this.props.href ? (
          <a
            href={this.props.href}
            target={this.props.target || "_blank"}
            rel="noopener noreferrer"
            download={this.props.download}
          >
            <button ref={this.buttonRef} className="button-secondary" onClick={this.props.onClick}>
              {buttonContent}
            </button>
          </a>
        ) : (
          <button ref={this.buttonRef} className="button-secondary" onClick={this.props.onClick}>
            {buttonContent}
          </button>
        )}
      </div>
    );
  }
}
