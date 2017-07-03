import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';

// is-sibling-sidebar-open
class BoardCanvas extends Component {
  render() {
    return (
<div className="board-canvas">
<div className="lists js-lists ui-sortable">
  <div className="list js-list" id="js-list-G4uKwNfb6rruHwReb">
    <div className="list-header js-list-header ui-sortable-handle">
      <h2 className="list-header-name">Platforms status now</h2>
    </div>
    <div className="list-body js-perfect-scrollbar ps-container ps-active-y" data-ps-id="93c71a35-3274-dee6-6e61-1f2da0ad3111">
      <div className="minicards clearfix js-minicards ui-sortable ui-sortable-disabled">
        <Card />
      </div>
      
      <div className="ps-scrollbar-x-rail" style={{left: 0 + 'px', bottom: 3 + 'px'}}>
        <div className="ps-scrollbar-x" style={{left: 0 + 'px', width: 0 + 'px'}}></div>
      </div>
      <div className="ps-scrollbar-y-rail" style={{top: 0 + 'px', height: 148 + 'px', right: 3 + 'px'}}>
        <div className="ps-scrollbar-y" style={{top: 0 + 'px', height: 32 + 'px'}}></div>
      </div>
    </div>
  </div>

    { /* new list */}
 
</div> { /* end ui-sortable */ }
{ /* end board-canvas */ }
</div> 

    );
  }
}

export default BoardCanvas;