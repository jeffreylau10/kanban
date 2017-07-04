import React, { Component } from 'react';
import './App.css';
import BoardList from './BoardList.js';

// is-sibling-sidebar-open
class BoardCanvas extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      data: {
        "lists": [
        {"id":"8yMwDPEje4arvhtoG", "title":"Wishes for next release","boardId":"t2YaGmyXgNkppcFBq","sort":2,"createdAt":{"$date":1476985812788},"archived":true,"userId":"r99XtfBvEa2xawd5g","modifiedAt":{"$date":1486534101199}},
        {"id":"LMgK3eFrBDC8DmPq5","title":"Work in progress","boardId":"t2YaGmyXgNkppcFBq","sort":3,"createdAt":{"$date":1476985815014},"archived":false,"userId":"r99XtfBvEa2xawd5g","modifiedAt":{"$date":1486804115476}},
        {"id":"sp3hMw3ZjSMLQnzie","title":"Done  2016-11","boardId":"t2YaGmyXgNkppcFBq","sort":3,"createdAt":{"$date":1476985819898},"archived":true,"userId":"r99XtfBvEa2xawd5g","modifiedAt":{"$date":1486533767597}},
        {"id":"ScTtZg8e8fdKHEWXt","title":"Wishes","boardId":"t2YaGmyXgNkppcFBq","sort":2,"createdAt":{"$date":1476985805687},"archived":false,"userId":"r99XtfBvEa2xawd5g","modifiedAt":{"$date":1486804115472}}
        ],
        "cards": [
        {"id":"LXp7tL9u7zXvDyvkR","title":"2016-11-18 PR17: Display message when user wants to choose existing username (Fixes: #16)","members":["jc3R4RhfXBcJC7R5t"],"labelIds":[],"listId":"sp3hMw3ZjSMLQnzie","boardId":"t2YaGmyXgNkppcFBq","sort":-11,"createdAt":{"$date":1479675805146},"dateLastActivity":{"$date":1479675805146},"archived":false,"userId":"r99XtfBvEa2xawd5g"},
        {"id":"rJrcTSNu6G6RGW6RP","title":"2016-10-20 Updated README.md to for info about Wekan fork","members":["r99XtfBvEa2xawd5g"],"labelIds":["d8sRTC"],"listId":"sXreXGsAvXDBNqSpf","boardId":"t2YaGmyXgNkppcFBq","sort":3.5,"createdAt":{"$date":1476985887192},"dateLastActivity":{"$date":1476985887192},"archived":false,"userId":"r99XtfBvEa2xawd5g"},
        {"id":"ARMWJb6J8KybdGo2a","title":"2016-10-20 Created Wekan fork GitHub repo and invited pull request contributors to it. Created Rocket.Chat channel Wekan instance that is now used for this roadmap.","members":["7fBwJupEqtBqN9yGm"],"labelIds":["d8sRTC"],"listId":"sXreXGsAvXDBNqSpf","boardId":"t2YaGmyXgNkppcFBq","sort":4,"createdAt":{"$date":1476986114489},"dateLastActivity":{"$date":1476986114489},"archived":false,"userId":"r99XtfBvEa2xawd5g"},
        {"id":"LXp7tL9u7zXvDyvkR","title":"2016-11-18 PR17: Display message when user wants to choose existing username (Fixes: #16)","members":["jc3R4RhfXBcJC7R5t"],"labelIds":[],"listId":"sp3hMw3ZjSMLQnzie","boardId":"t2YaGmyXgNkppcFBq","sort":-11,"createdAt":{"$date":1479675805146},"dateLastActivity":{"$date":1479675805146},"archived":false,"userId":"r99XtfBvEa2xawd5g"},
        {"id":"rJrcTSNu6G6RGW6RP","title":"2016-10-20 Updated README.md to for info about Wekan fork","members":["r99XtfBvEa2xawd5g"],"labelIds":["d8sRTC"],"listId":"sXreXGsAvXDBNqSpf","boardId":"t2YaGmyXgNkppcFBq","sort":3.5,"createdAt":{"$date":1476985887192},"dateLastActivity":{"$date":1476985887192},"archived":false,"userId":"r99XtfBvEa2xawd5g"},
        {"id":"ARMWJb6J8KybdGo2a","title":"2016-10-20 Created Wekan fork GitHub repo and invited pull request contributors to it. Created Rocket.Chat channel Wekan instance that is now used for this roadmap.","members":["7fBwJupEqtBqN9yGm"],"labelIds":["d8sRTC"],"listId":"sXreXGsAvXDBNqSpf","boardId":"t2YaGmyXgNkppcFBq","sort":4,"createdAt":{"$date":1476986114489},"dateLastActivity":{"$date":1476986114489},"archived":false,"userId":"r99XtfBvEa2xawd5g"},
{"id":"LXp7tL9u7zXvDyvkR","title":"2016-11-18 PR17: Display message when user wants to choose existing username (Fixes: #16)","members":["jc3R4RhfXBcJC7R5t"],"labelIds":[],"listId":"sp3hMw3ZjSMLQnzie","boardId":"t2YaGmyXgNkppcFBq","sort":-11,"createdAt":{"$date":1479675805146},"dateLastActivity":{"$date":1479675805146},"archived":false,"userId":"r99XtfBvEa2xawd5g"},
        {"id":"rJrcTSNu6G6RGW6RP","title":"2016-10-20 Updated README.md to for info about Wekan fork","members":["r99XtfBvEa2xawd5g"],"labelIds":["d8sRTC"],"listId":"sXreXGsAvXDBNqSpf","boardId":"t2YaGmyXgNkppcFBq","sort":3.5,"createdAt":{"$date":1476985887192},"dateLastActivity":{"$date":1476985887192},"archived":false,"userId":"r99XtfBvEa2xawd5g"},
        {"id":"ARMWJb6J8KybdGo2a","title":"2016-10-20 Created Wekan fork GitHub repo and invited pull request contributors to it. Created Rocket.Chat channel Wekan instance that is now used for this roadmap.","members":["7fBwJupEqtBqN9yGm"],"labelIds":["d8sRTC"],"listId":"sXreXGsAvXDBNqSpf","boardId":"t2YaGmyXgNkppcFBq","sort":4,"createdAt":{"$date":1476986114489},"dateLastActivity":{"$date":1476986114489},"archived":false,"userId":"r99XtfBvEa2xawd5g"},
{"id":"LXp7tL9u7zXvDyvkR","title":"2016-11-18 PR17: Display message when user wants to choose existing username (Fixes: #16)","members":["jc3R4RhfXBcJC7R5t"],"labelIds":[],"listId":"sp3hMw3ZjSMLQnzie","boardId":"t2YaGmyXgNkppcFBq","sort":-11,"createdAt":{"$date":1479675805146},"dateLastActivity":{"$date":1479675805146},"archived":false,"userId":"r99XtfBvEa2xawd5g"},
        {"id":"rJrcTSNu6G6RGW6RP","title":"2016-10-20 Updated README.md to for info about Wekan fork","members":["r99XtfBvEa2xawd5g"],"labelIds":["d8sRTC"],"listId":"sXreXGsAvXDBNqSpf","boardId":"t2YaGmyXgNkppcFBq","sort":3.5,"createdAt":{"$date":1476985887192},"dateLastActivity":{"$date":1476985887192},"archived":false,"userId":"r99XtfBvEa2xawd5g"},
        {"id":"ARMWJb6J8KybdGo2a","title":"2016-10-20 Created Wekan fork GitHub repo and invited pull request contributors to it. Created Rocket.Chat channel Wekan instance that is now used for this roadmap.","members":["7fBwJupEqtBqN9yGm"],"labelIds":["d8sRTC"],"listId":"sXreXGsAvXDBNqSpf","boardId":"t2YaGmyXgNkppcFBq","sort":4,"createdAt":{"$date":1476986114489},"dateLastActivity":{"$date":1476986114489},"archived":false,"userId":"r99XtfBvEa2xawd5g"}
]
        }
    };
  };
  render() {
    const lists = this.state.data.lists.map((list) =>
      <BoardList messages={this.state.data} list={list} />
    );
    //board-canvas is-sibling-sidebar-open 
    return (
<div className="board-canvas">
<div className="lists js-lists ui-sortable">
    {lists}


    { /* new list */}
 
</div> { /* end ui-sortable */ }
{ /* end board-canvas */ }
</div> 

    );
  }
}

export default BoardCanvas;