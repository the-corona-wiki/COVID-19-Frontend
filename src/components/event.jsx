import React from "react"
import "./event.css"

export default function Event(props) {
  const { time, headline } = props
  return (
    <div className='event'>
      <h5>{time}</h5>
      <h4>{headline}</h4>
    </div>
  )
}
