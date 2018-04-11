import React from 'react'
import TextFace from './TextFace'
import ReactFitText from 'react-fittext'
import SoundSystem from './soundsystem.png'
import AppsVisual from './AppsVisual'
import SocialMediaLinks from './SocialMediaLinks'

class MainPage extends React.Component {
  render (props) {
    return (
      <div className="Main-page">
        <div id="About-link-container" className="Main-page-block">
          <TextFace changeDisplay={this.props.changeDisplay}/>
        </div>
        <AppsVisual/>
        <div id="Audio-link" key="Audio-page" className="Main-page-block" onClick={(e) => this.props.changeDisplay(e)}>
          <div className="Sound-system-container">
            <img className="Sound-system" src={SoundSystem} alt="soundsystem"/>
          </div>
        </div>
        <SocialMediaLinks/>
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
