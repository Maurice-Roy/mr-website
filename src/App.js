import React, { Component } from 'react';
import './App.css';
import MainPage from './MainPage'
import AboutPage from './AboutPage'
import AppsPage from './AppsPage'
import AudioPage from './AudioPage'
import DesignPage from './DesignPage'
import marioCursor from './Mario_Cursor.png'

class App extends Component {
  state = {
    currentDisplay: "Main-page"
  }

  displaySwitch = () => {
    switch(this.state.currentDisplay){
      case "Main-page":
        return <MainPage changeDisplay={this.changeDisplay}/>
      case "About-page":
        return <AboutPage/>
      case "Apps-page":
        return <AppsPage/>
      case "Audio-page":
        return <AudioPage/>
      case "Design-page":
        return <DesignPage/>
      default:
        console.log("Hit default in displaySwitch!")
    }
  }

  changeDisplay = (event) => {
    this.setState({
      currentDisplay: event.target.key
    })
  }

  render() {
    return (
      <div className="App" style={{ cursor: `url(https://i.imgur.com/x3FWrI5.png), crosshair`}}>
        {this.displaySwitch()}
      </div>
    );
  }
}

export default App;
