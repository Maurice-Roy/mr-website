import React from 'react'
import TextFace from './TextFace'
import ReactFitText from 'react-fittext'
import SoundSystem from './soundsystem.png'

class MainPage extends React.Component {
  render (props) {
    return (
      <div className="Main-page">
        <div id="About-link" key="About-page" className="Main-page-block" onClick={(e) => this.props.changeDisplay(e)}>
          <TextFace/>
        </div>
        <div id="Apps-link" key="Apps-page" className="Main-page-block" onClick={(e) => this.props.changeDisplay(e)}>
          <ReactFitText compressor={0}>
            <span>APPS</span>
          </ReactFitText>
        </div>
        <div id="Audio-link" key="Audio-page" className="Main-page-block" onClick={(e) => this.props.changeDisplay(e)}>
          <div className="Sound-system-container">
            <img className="Sound-system" src={SoundSystem} alt="soundsystem"/>
          </div>
        </div>
        <div id="Design-link" key="Design-page" className="Main-page-block" onClick={(e) => this.props.changeDisplay(e)}>
          <ReactFitText compressor={0}>
            <span>VISUAL</span>
          </ReactFitText>
        </div>
      </div>
    )
  }
}

export default MainPage;
