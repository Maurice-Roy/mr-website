import React from 'react'
import TextFace from './TextFace'

class MainPage extends React.Component {
  render (props) {
    return (
      <div className="Main-page">
        <div id="About-link" key="About-page" className="Main-page-block" onClick={(e) => this.props.changeDisplay(e)}>
          <TextFace/>
        </div>
        <div id="Apps-link" key="Apps-page" className="Main-page-block" onClick={(e) => this.props.changeDisplay(e)}></div>
        <div id="Audio-link" key="Audio-page" className="Main-page-block" onClick={(e) => this.props.changeDisplay(e)}></div>
        <div id="Design-link" key="Design-page" className="Main-page-block" onClick={(e) => this.props.changeDisplay(e)}></div>
      </div>
    )
  }
}

export default MainPage;
