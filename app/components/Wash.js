import React from "react";

class Wash extends React.Component {

  render() {
    return (
      <div>
        {
          this.props.decision ?
          "Tomorrow's weather is good, you can wash clothes today" :
          "Tomorrow's weather is bad, not a good idea to wash clothes"
        }
      </div>
    );
  }
}

export default Wash;
