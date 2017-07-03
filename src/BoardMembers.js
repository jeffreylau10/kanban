import React, { Component } from 'react';
import './App.css';

class BoardMembers extends Component {
  render() {
    return (
      <div className="board-widget board-widget-members"><h3><i className="fa fa-user"></i>Members</h3>
<div className="board-widget-content">
    <a className="member js-member ui-draggable ui-draggable-handle ui-draggable-disabled" title=" (xet7)" href="#" aria-label=" (xet7)"><img className="avatar avatar-image" src="/cfs/files/avatars/RaoR77F6XrkXxWNmt/xet7.jpg" />
<span className="member-presence-status disconnected"></span><span className="member-type admin"></span>
</a>
<a className="member js-member ui-draggable ui-draggable-handle ui-draggable-disabled" title=" (wjdqls1342)" href="#" aria-label=" (wjdqls1342)"><svg className="avatar avatar-initials" viewBox="0 0 12 15"><text x="50%" y="13" text-anchor="middle">W</text></svg>
<span className="member-presence-status disconnected"></span><span className="member-type normal"></span>
</a>
 <div className="clearfix"></div>
</div></div>
    );
  }
}

export default BoardMembers;