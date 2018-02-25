import React from "react";
import {
  Grid,
  Row,
  Col,
  Thumbnail
} from 'react-bootstrap'

class Forecast extends React.Component {
  render() {
    const forecasts = this.props.data;
    return (
      <div>
        <Grid>
          <Row>
            {
              forecasts.map(forecast=>{
                return(
                  <Col sm={4}>
                    <p>{forecast.time}</p>
                    <Thumbnail src={`http://openweathermap.org/img/w/${forecast.icon}.png`} >
                      <p>{forecast.description}</p>
                      <h3>{forecast.temp}</h3>    
                    </Thumbnail>
                  </Col>
                )
              })
            }
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Forecast;
