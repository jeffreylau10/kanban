import React, { Component } from 'react';
import './App.css';

{ /* popover style="left:1221px; top:38px;"*/ }

class PopOverMenu extends Component {
   
  render() {
      if (this.props.isTogglePopup) {
      return (
        <div className="pop-over js-pop-over board-color-nephritis">
          <div className="header"><a className="back-btn js-back-view is-hidden" href="#"><i className="fa fa-chevron-left"></i></a>
            <span className="header-title">Board Menu</span>
            <a className="close-btn js-close-pop-over" onClick={this.props.openPopup.bind(this)}><i className="fa fa-times-thin"></i></a></div>
          <div className="content-wrapper">
            <div className="content-container popup-container-depth-0"><div className="content">
              <ul className="pop-over-list"><li><a className="js-open-archives" href="#">Archived Items</a></li>
              </ul>
            </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      );}
      else {
          return (<div></div>);
      }
  }
};

export default PopOverMenu;