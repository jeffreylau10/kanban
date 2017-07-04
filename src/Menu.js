import React, { Component } from 'react';
import './App.css';

class Menu extends Component {
   
  render() {
    return (
        <div id="header" className="board-color-nephritis">
          <div id="header-main-bar">
            <h1 className="header-board-menu">
              <a className="is-disabled" href="#">Wekan roadmap</a></h1>
            <div className="board-header-btns left"><a className="board-header-btn js-log-in" title="Log In" href="#" aria-label="Log In">
              <i className="fa fa-sign-in"></i>
              <span>Log In</span></a></div><div className="board-header-btns right"><a className="board-header-btn js-open-filter-view" title="Filter" href="#" aria-label="Filter"><i className="fa fa-filter"></i>
                <span>Filter</span>
              </a><div className="separator"></div>
              <a className={this.props.isTogglePopup ? 'board-header-btn js-open-board-menu is-active' : 'board-header-btn js-open-board-menu'} 
              title="Board Menu" onClick={this.props.openPopup.bind(this)} aria-label="Board Menu">
                <i className="board-header-btn-icon fa fa-navicon"></i></a></div>


            <a className="wekan-logo" href="/" title="Go back to your boards page." aria-label="Go back to your boards page.">
              <img src="/wekan-logo-header.png" alt="Wekan" /></a>
          </div>
        </div>
    )
  }
}

export default Menu;