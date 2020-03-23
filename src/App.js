import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./pages/Home"

function App() {
  document.title = 'COVID-19 Wiki'
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  )
}

export default App
