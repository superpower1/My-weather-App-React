import React from 'react'
import Weather from './Weather'
import NavMenu from './NavMenu'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isNav: false
    }
  }

  showNav() {
    this.setState({isNav: true});
  }

  render() {
    return <div>
      <div className="background"></div>
      <NavMenu isNav={this.state.isNav} />
      <Weather showNav={this.showNav.bind(this)}/>
    </div>
  }

}
