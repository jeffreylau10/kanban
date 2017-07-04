import React, { Component } from 'react';
import './App.css';
import BoardSideBar from './BoardSideBar.js';
import BoardCanvas from './BoardCanvas.js';
import PopOverMenu from './PopOverMenu.js';
import Menu from './Menu.js';

class App extends Component {
   constructor(props,context){
        super(props,context);

        this.state = {
            isTogglePopup: false
        };

        this.openPopup = this.openPopup.bind(this);
    }
    openPopup(){
      console.log('openMenu pressed');
        this.setState(prevState => ({
            isTogglePopup: !prevState.isTogglePopup
        }));
    }
  render() {
    return (
      <div className="App">
        <Menu openPopup={this.openPopup} isTogglePopup={this.state.isTogglePopup} />
        

        <PopOverMenu isTogglePopup={this.state.isTogglePopup} openPopup={this.openPopup} />

        <div id="content">
          
            <div className="board-wrapper board-color-nephritis">
              { /* <BoardSideBar /> */ }
<BoardSideBar />
           <BoardCanvas />

            </div>
        </div>
      </div>
    );
  }
}

export default App;
