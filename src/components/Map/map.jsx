import React, { Component } from 'react'
import './map.css'
class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      confirmed: null,
      deaths: null,
      recovered: null
    }
  }

  componentDidMount() {
    fetch('https://covid19-wiki-api.herokuapp.com/v2/total', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        const { confirmed, deaths, recovered } = res.total[res.total.length - 1]
        this.setState({ confirmed, deaths, recovered })
      })
  }

  render() {
    const { confirmed, deaths, recovered } = this.state
    return (
      <React.Fragment>
        <iframe frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title="2019-nCoV" src="http://gisanddata.maps.arcgis.com/apps/Embed/index.html%3Fwebmap=14aa9e5660cf42b5b4b546dec6ceec7c&amp;extent=77.3846,11.535,163.5174,52.8632&amp;zoom=true&amp;previewImage=false&amp;scale=true&amp;disable_scroll=true&amp;theme=light" />
        <div className='statContainer'>
          <div className='stats'>
            <h4>Toal Confirmed Cases</h4>
            <h2 className='confirmed'>{confirmed}</h2>
          </div>
          <div className='stats'>
            <h4>Toal Deaths</h4>
            <h2 className='deaths'>{deaths}</h2>
          </div>
          <div className='stats'>
            <h4>Toal Recoveries</h4>
            <h2 className='recovered'>{recovered}</h2>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Map