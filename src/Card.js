import React, { Component } from 'react';
import './App.css';

class Card extends Component {
  render() {
    return (
<a className="minicard-wrapper js-minicard ui-droppable" href="https://wekan.indie.host/b/t2YaGmyXgNkppcFBq/wekan-fork-roadmap/Soypexh7ZnDEth4RR">
    <div className="minicard">
        <div className="minicard-labels">
            <div className="minicard-label card-label-purple" title="Platforms"></div>
            <div className="minicard-label card-label-black" title="Has newest Wekan"></div>
        </div>
        <div className="minicard-title">{this.props.data.title}</div>
        <div className="dates">
        </div>

        <div className="badges">
            <div className="badge badge-state-image-only" title="**Features only in Standalone version**">
                <span className="badge-icon fa fa-align-left"></span>
            </div>

        </div>
    </div>
</a>
    );

  }
}

export default Card;