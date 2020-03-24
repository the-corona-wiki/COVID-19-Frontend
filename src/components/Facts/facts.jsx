import React from 'react'
import './facts.css'

export default function Facts() {
  return (
    <div className='factContainer'>
      <h1>What is COVID-19</h1>
      <div className='factBox'>
        <h2>Symptoms</h2>
        <h2>Prevention</h2>
        <h2>Treatment</h2>
      </div>

      <div className='factBox'>
        <ul>
          <li>Coughing</li>
          <li>Fever</li>
          <li>Tiredness</li>
          <li>Shortness of Breath</li>
        </ul>
        <ul>
          <li>Wash your hands often</li>
          <li>Cover your coughs</li>
          <li>Minimize touching your face</li>
          <li>Keep a 6ft distance from others</li>
          <li>Stay home unless absolutely necessary</li>
        </ul>
        <ul>
          <li>Self-isolate from others</li>
          <li>Drink lots of liquids</li>
          <li>Keep warm</li>
          <li>Use a room humidifier or take a hot shower</li>
        </ul>
      </div>

    </div>
  )
}