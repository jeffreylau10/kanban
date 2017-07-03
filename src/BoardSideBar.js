import React, { Component } from 'react';
import './App.css';

class BoardSideBar extends Component {
  render() {
    return (
    <div className="board-sidebar sidebar is-open">
            <a className="sidebar-tongue js-toggle-sidebar" title="Close Sidebar" href="#" aria-label="Close Sidebar">
            <i className="fa fa-angle-left"></i>
            </a>
        <div className="sidebar-shadow">
            <div className="sidebar-content sidebar-shortcuts"><a className="board-header-btn js-shortcuts" href="#">
                <i className="fa fa-keyboard-o"></i>
            <span>Keyboard shortcuts</span></a>
            </div>
            <div className="sidebar-content js-board-sidebar-content js-perfect-scrollbar ps-container ps-active-y" data-ps-id="143d14e6-06b1-6821-df0c-03e56454c20c">
                <a className="hide-btn js-hide-sidebar"><i className="fa fa-angle-right"></i></a>

                { /* <BoardMembers /> */ }

                <hr />
                { /* <BoardLabels /> */ }


                <hr />
                <h3><i className="fa fa-comments-o"></i>Activities</h3>

                <div className="activities js-sidebar-activities">
                { /* <BoardActivity map /> */ }

                </div>

                { /* for overflow panels */ }
                <div className="ps-scrollbar-x-rail" style={{left: 0 + 'px', bottom: 3 + 'px'}}>
                    <div className="ps-scrollbar-x" style={{left: 0 + 'px', width: 0 + 'px'}}></div>
                </div>
                <div className="ps-scrollbar-y-rail" style={{top: 0 + 'px', height: 201 + 'px', right: 3 + 'px'}}>
                    <div className="ps-scrollbar-y" style={{top: 0 + 'px', height: 17 + 'px'}}></div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default BoardSideBar;