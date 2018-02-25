import React from "react";
import {
  Grid,
  Row,
  Col,
  Thumbnail
} from 'react-bootstrap'

class Forecast extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col sm={4}>
              <Thumbnail src={`http://openweathermap.org/img/w/09d.png`} >
                <h3>Thumbnail label</h3>
                <p>Description</p>
              </Thumbnail>
            </Col>
            <Col sm={4}>
              <Thumbnail src={`http://openweathermap.org/img/w/09d.png`} >
                <h3>Thumbnail label</h3>
                <p>Description</p>
              </Thumbnail>
            </Col>
            <Col sm={4}>
              <Thumbnail src={`http://openweathermap.org/img/w/09d.png`} >
                <h3>Thumbnail label</h3>
                <p>Description</p>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Forecast;
