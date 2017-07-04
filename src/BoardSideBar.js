import React, { Component } from 'react';
import './App.css';
import BoardLabels from './BoardLabels.js';
import BoardMembers from './BoardMembers.js';
import BoardActivity from './BoardActivity.js';

class BoardSideBar extends Component {

    constructor(props, context){
        super(props, context);
        this.toggleSidebar = this.toggleSidebar.bind(this);

        this.state = {isToggleOn: true,
            activities: {"activities" : [
{"id":"taXKmDrqkcGpKiCdw","userId":"r99XtfBvEa2xawd5g","oldListId":"LMgK3eFrBDC8DmPq5","activityType":"moveCard","listId":"6tJrsrSjx9MAXgwdF","boardId":"t2YaGmyXgNkppcFBq","cardId":"vR7Fed53waH497g8C","createdAt":"2012-04-23T18:25:43.511Z"},
{"id":"6ka9CPhpNmNPgkuA7","userId":"r99XtfBvEa2xawd5g","type":"list","activityType":"archivedList","listId":"ocKf9Zm8r4Apg5ZCw","boardId":"t2YaGmyXgNkppcFBq","createdAt":"2012-04-23T18:25:43.511Z"},
{"id":"JJDM8LebjTLCbDsXu","userId":"r99XtfBvEa2xawd5g","oldListId":"ocKf9Zm8r4Apg5ZCw","activityType":"moveCard","listId":"6tJrsrSjx9MAXgwdF","boardId":"t2YaGmyXgNkppcFBq","cardId":"82w5QTS3qZyhQ7gi3","createdAt":"2012-04-23T18:25:43.511Z"},
{"id":"HwgcCfW7H7R3vAX48","userId":"r99XtfBvEa2xawd5g","oldListId":"ocKf9Zm8r4Apg5ZCw","activityType":"moveCard","listId":"6tJrsrSjx9MAXgwdF","boardId":"t2YaGmyXgNkppcFBq","cardId":"gojkHcbyKnr2cQoLK","createdAt":"2012-04-23T18:25:43.511Z"},
{"id":"aNPqy9N4GWxJfgXct","userId":"r99XtfBvEa2xawd5g","oldListId":"ocKf9Zm8r4Apg5ZCw","activityType":"moveCard","listId":"6tJrsrSjx9MAXgwdF","boardId":"t2YaGmyXgNkppcFBq","cardId":"syfYoQyY85CAA42zj","createdAt":"2012-04-23T18:25:43.511Z"},
{"id":"rEjRXSeA7juiQhtPC","userId":"r99XtfBvEa2xawd5g","memberId":"r99XtfBvEa2xawd5g","activityType":"joinMember","boardId":"t2YaGmyXgNkppcFBq","cardId":"mZZTYSJrHT4gNJxdX","createdAt":"2012-04-23T18:25:43.511Z"},
{"id":"CPapKFA4jZLXantQu","userId":"r99XtfBvEa2xawd5g","memberId":"r99XtfBvEa2xawd5g","activityType":"joinMember","boardId":"t2YaGmyXgNkppcFBq","cardId":"T8Jc4RS69Mu8RAPEa","createdAt":"2012-04-23T18:25:43.511Z"},
{"id":"xwyzoEZC6fzcviQbs","userId":"r99XtfBvEa2xawd5g","memberId":"2ahek2XDfXJbzHuSB","activityType":"unjoinMember","boardId":"t2YaGmyXgNkppcFBq","cardId":"T8Jc4RS69Mu8RAPEa","createdAt":"2012-04-23T18:25:43.511Z"},
{"id":"nZ6gdgmHN5Wp4jnkM","userId":"r99XtfBvEa2xawd5g","memberId":"KbtzyWAbQ7EzWvchk","activityType":"joinMember","boardId":"t2YaGmyXgNkppcFBq","cardId":"vR7Fed53waH497g8C","createdAt":"2012-04-23T18:25:43.511Z"},
{"id":"S8jTKWe3axT3RmvoC","userId":"r99XtfBvEa2xawd5g","memberId":"KbtzyWAbQ7EzWvchk","type":"member","activityType":"addBoardMember","boardId":"t2YaGmyXgNkppcFBq","createdAt":"2012-04-23T18:25:43.511Z"},
{"id":"4YvX7raHJbwpKP9MX","userId":"r99XtfBvEa2xawd5g","activityType":"createCard","boardId":"t2YaGmyXgNkppcFBq","listId":"LMgK3eFrBDC8DmPq5","cardId":"vR7Fed53waH497g8C","createdAt":"2012-04-23T18:25:43.511Z"}
]}};
    };
    
    toggleSidebar() {
        console.log('toggle sidebar pressed');
        this.setState(prevState => ( {
            isToggleOn: !prevState.isToggleOn
        }));
    };

  render() {
      const activities = this.state.activities.activities.map((activity) => 
        <BoardActivity data={activity} />);
    return (
    <div className={this.state.isToggleOn ? 'board-sidebar sidebar is-open' : 'board-sidebar sidebar'}>
            <a className="sidebar-tongue js-toggle-sidebar" onClick={this.toggleSidebar} title="Close Sidebar" href="#" aria-label="Close Sidebar">
            <i className="fa fa-angle-left"></i>
            </a>
        <div className="sidebar-shadow">
            <div className="sidebar-content sidebar-shortcuts"><a className="board-header-btn js-shortcuts" href="#">
                <i className="fa fa-keyboard-o"></i>
            <span>Keyboard shortcuts</span></a>
            </div>
            <div className="sidebar-content js-board-sidebar-content js-perfect-scrollbar ps-container ps-active-y" data-ps-id="143d14e6-06b1-6821-df0c-03e56454c20c">
                <a className="hide-btn js-hide-sidebar" onClick={this.toggleSidebar}><i className="fa fa-angle-right"></i></a>

                { /* <BoardMembers /> */ }
<BoardMembers />
                <hr />
                { /* <BoardLabels /> */ }
<BoardLabels />

                <hr />
                <h3><i className="fa fa-comments-o"></i>Activities</h3>

                <div className="activities js-sidebar-activities">
                { /* <BoardActivity map /> */ }
                {activities}
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