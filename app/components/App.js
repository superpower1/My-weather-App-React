import React from 'react'
import Weather from './Weather'
import NavMenu from './NavMenu'

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      <NavMenu/>
      <h1>hello world</h1>
      <Weather></Weather>
    </div>
  }

}
