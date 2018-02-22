import React from 'react';
import Weather from './Weather'

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      <h1>hello world</h1>
      <Weather></Weather>
    </div>
  }

}
