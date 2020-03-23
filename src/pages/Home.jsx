import React, { Component } from 'react';
import './Home.css';
import Event from '../components/Event/event';
import Timeline from '../components/Timeline';
import Map from '../components/Map/map'
// import NET from '../scripts/vanta.net.min'
// import * as THREE from 'three'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { mainView: 'timeline' };
    // this.ref = React.createRef()
  }

  // componentDidMount() {
  //   this.vantaEffect = NET({
  //     el: this.ref.current,
  //     THREE: THREE
  //   })
  // }

  // componentWillUnmount() {
  //   if (this.vantaEffect) {
  //     this.vantaEffect.destroy()
  //   }
  // }

  onTimelineClick = () => {
    const { mainView } = this.state;
    if (mainView !== 'timeline') {
      this.setState({ mainView: 'timeline' });
    }
  };

  onMapClick = () => {
    const { mainView } = this.state;
    if (mainView !== 'map') {
      this.setState({ mainView: 'map' });
    }
  };

  render() {
    return (
      // <div className="homeContainer" ref={this.ref}>
      <div className="homeContainer">
        <div className="nav">
          <h1>COVID-19 Wiki</h1>
        </div>
        <div className="links">
          <button>What is Coronavirus</button>
          <button onClick={this.onTimelineClick}>Timeline</button>
          <button onClick={this.onMapClick}>Live Case Map</button>
        </div>
        <div className="news">
          <div>
            <h3 className="redBadge">Live Updates</h3>
            <span>Access to these updates is free</span>
          </div>
          <Event
            time="3:30 PM"
            headline="FDA suspends most domestic inspections of food, drug, device makers"
          />
          <Event
            time="6:39 PM"
            headline="Trump administraions ban on fetal tissue research is blocking some experiments on possible coronavirus treatments"
          />
          <Event
            time="8:45 AM"
            headline="Trump border controls not ready yet, will need Mexicos cooperation officials say"
          />
        </div>
        <div className="map">
          {this.state.mainView === 'timeline' && <Timeline />}
          {this.state.mainView === 'map' && <Map />}
        </div>
      </div>
    );
  }
}

export default Home;
