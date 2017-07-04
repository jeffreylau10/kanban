import React, { Component } from 'react';
import './App.css';
import moment from 'moment'

class BoardActivity extends Component {
  //{this.props.data.createdAt}
  render() {
    return (
<div className="activity"><a className="member js-member" title=" (xet7)" href="#" aria-label=" (xet7)">
  <svg className="avatar avatar-initials" viewBox="0 0 12 15"><text x="50%" y="13" text-anchor="middle">X</text></svg>
</a>
<p className="activity-desc">xet7
{this.props.data.activitytype} 
<a href="https://wekan.indie.host/b/t2YaGmyXgNkppcFBq/wekan-fork-roadmap/P72AQkKDwbRSm9wfN" className="action-card">Themes</a>.

<span title={moment(this.props.data.createdAt).format('MMMM Do YYYY, h:mm:ss a')} className="activity-meta">{moment(this.props.data.createdAt).fromNow()}</span></p></div>
    );
  }
}

export default BoardActivity;

//"Tue Feb 28 2017 06:18:59 GMT+0800 (Malay Peninsula Standard Time)"