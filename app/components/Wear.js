import React from "react";
import whatToWear from '../../lib/whatToWear'

class Wear extends React.Component {
  render() {
    return (
      <div className="should-wear">
        You should wear {whatToWear(this.props.temp)}
      </div>
    );
  }
}

export default Wear;
