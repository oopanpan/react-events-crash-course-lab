import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (e) => {
    drawChromeBoiAtCoords(e.clientX, e.clientY)
  }
  
  handleClick = () => {
    toggleCycling()
  }
   
  handleKeyPress = (e) => {
    if (e.key === 'a'){
      resize('+');
    }
    else if (e.key === 's'){
      resize('-')
    }
  }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
