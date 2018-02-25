import React from 'react'
import Weather from './Weather'
import NavMenu from './NavMenu'

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      <div className="background"></div>
      <NavMenu/>
      <Weather></Weather>
    </div>
  }

}
