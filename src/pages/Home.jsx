import React, { Component } from "react"
import "./Home.css"
import Event from "../components/event"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className='homeContainer'>
        <div className='nav'><h1>Covid-19 Wiki</h1></div>
        <div className='links'>
          <button>What is Coronavirus</button>
          <button>News Articles</button>
          <button>Live Updates</button>
        </div>
        <div className='news'>
          <div>
            <h3 className='redBadge'>Live Updates</h3>
            <span>Access to these updates is free</span>
          </div>
          <Event
            time='3:30 PM'
            headline='FDA suspends most domestic inspections of food, drug, device makers'
          />
          <Event
            time='6:39 PM'
            headline='Trump administraions ban on fetal tissue research is blocking some experiments on possible coronavirus treatments'
          />
          <Event
            time='8:45 AM'
            headline='Trump border controls not ready yet, will need Mexicos cooperation officials say'
          />
        </div>
        <div className='map'>
          <iframe frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title="2019-nCoV" src="http://gisanddata.maps.arcgis.com/apps/Embed/index.html%3Fwebmap=14aa9e5660cf42b5b4b546dec6ceec7c&amp;extent=77.3846,11.535,163.5174,52.8632&amp;zoom=true&amp;previewImage=false&amp;scale=true&amp;disable_scroll=true&amp;theme=light" />
          <div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
