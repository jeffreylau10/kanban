import React, { Component } from 'react';
import './App.css';
import BoardSideBar from './BoardSideBar.js';
import BoardCanvas from './BoardCanvas.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="header" className="board-color-nephritis">
          <div id="header-main-bar">
            <h1 className="header-board-menu">
              <a className="is-disabled" href="#">Wekan roadmap</a></h1>
            <div className="board-header-btns left"><a className="board-header-btn js-log-in" title="Log In" href="#" aria-label="Log In">
              <i className="fa fa-sign-in"></i>
              <span>Log In</span></a></div><div className="board-header-btns right"><a className="board-header-btn js-open-filter-view" title="Filter" href="#" aria-label="Filter"><i className="fa fa-filter"></i>
                <span>Filter</span>
              </a><div className="separator"></div>
              <a className="board-header-btn js-open-board-menu" title="Board Menu" href="#" aria-label="Board Menu">
                <i className="board-header-btn-icon fa fa-navicon"></i></a></div>


            <a className="wekan-logo" href="/" title="Go back to your boards page." aria-label="Go back to your boards page.">
              <img src="/wekan-logo-header.png" alt="Wekan" /></a>
          </div>
        </div>

        { /* popover style="left:1221px; top:38px;"*/ }
        { /*  <div className="pop-over js-pop-over board-color-nephritis" >
          <div className="header"><a className="back-btn js-back-view is-hidden" href="#"><i className="fa fa-chevron-left"></i></a>
            <span className="header-title">Board Menu</span>
            <a className="close-btn js-close-pop-over"><i className="fa fa-times-thin"></i></a></div>
          <div className="content-wrapper">
            <div className="content-container popup-container-depth-0"><div className="content">
              <ul className="pop-over-list"><li><a className="js-open-archives" href="#">Archived Items</a></li>
              </ul>
            </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div> */ }

        <div id="content">
          
            <div className="board-wrapper board-color-nephritis">
              { /* <BoardSideBar /> */ }

           <BoardCanvas />

            </div>
        </div>
      </div>
    );
  }
}

export default App;
