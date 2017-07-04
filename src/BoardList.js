import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';
import CardDetails from './CardDetails.js';
import PerfectScrollbar from 'react-perfect-scrollbar'

class BoardList extends Component {
   
    render() {
    const cards = this.props.messages.cards.map((card) =>
      <Card data={card} toggleCardDetail={this.props.toggleCardDetail} />
    );
         return (<div>
          <div className="list js-list">
              <div className="list-header js-list-header ui-sortable-handle">
                <h2 className="list-header-name">{this.props.list.title}</h2>
              </div>
              <PerfectScrollbar className="list-body">
                <div className="minicards clearfix js-minicards ui-sortable ui-sortable-disabled">
                  {cards}
                </div>
              </PerfectScrollbar>
            </div>
          </div>
         );
       
    }
}

export default BoardList;

/*
<div className="list-body js-perfect-scrollbar ps-container ps-active-y">
    </div>
<div className="ps-scrollbar-x-rail" style={{left: 0 + 'px', bottom: 3 + 'px'}}>
        <div className="ps-scrollbar-x" style={{left: 0 + 'px', width: 0 + 'px'}}></div>
      </div>
      <div className="ps-scrollbar-y-rail" style={{top: 0 + 'px', height: 148 + 'px', right: 3 + 'px'}}>
        <div className="ps-scrollbar-y" style={{top: 0 + 'px', height: 32 + 'px'}}></div>
      </div> */