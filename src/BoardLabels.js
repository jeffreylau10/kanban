import React, { Component } from 'react';
import './App.css';

class BoardLabels extends Component {
  render() {
    return (
<div className="board-widget board-widget-labels"><h3><i className="fa fa-tags"></i>Labels</h3>
<div className="board-widget-content"><a className="card-label card-label-green" href="#"><span className="card-label-name">Feature</span></a><a className="card-label card-label-yellow" href="#"><span className="card-label-name">Internal</span></a><a className="card-label card-label-orange" href="#"><span className="card-label-name">UI/UX</span></a><a className="card-label card-label-purple" href="#"><span className="card-label-name">Platforms</span></a><a className="card-label card-label-sky" href="#"><span className="card-label-name">Trello doesn't have it!</span></a><a className="card-label card-label-red" href="#"><span className="card-label-name">Bug</span></a><a className="card-label card-label-black" href="#"><span className="card-label-name">Has newest Wekan</span></a>
</div></div>
    );
  }
}

export default BoardLabels;