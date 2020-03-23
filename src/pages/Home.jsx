import React, { Component } from 'react';
import './Home.css';
import Event from '../components/event';
import Timeline from '../components/Timeline';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { mainView: 'timeline' };
  }

  onTimelineClick = () => {
    const { mainView } = this.state;
    if (mainView != 'timeline') {
      this.setState({ mainView: 'timeline' });
    }
  };

  onMapClick = () => {
    const { mainView } = this.state;
    if (mainView != 'map') {
      this.setState({ mainView: 'map' });
    }
  };

  render() {
    return (
      <div className="homeContainer">
        <div className="nav">
          <a onClick={this.onTimelineClick} className="nav-btn">
            Timeline
          </a>
          <a onClick={this.onMapClick} className="nav-btn">
            Map
          </a>
        </div>
        <div className="links">
          <button>What is Coronavirus</button>
          <button>News Articles</button>
          <button>Live Updates</button>
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
          {this.state.mainView === 'map' && 'map'}
        </div>
      </div>
    );
  }
}

export default Home;
