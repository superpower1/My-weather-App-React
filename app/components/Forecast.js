import React from "react";
import toFahrenheit from '../../lib/toFahrenheit'
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
      <div className="forecast-info" id="forecast-info">
        <h3 className="title">3 Days Forecast</h3>
        <Grid>
          <Row>
            {
              forecasts.map((forecast, index)=>{
                return(
                  <Col sm={4} key={index}>
                    <p>{forecast.time}</p>
                    <Thumbnail src={`http://openweathermap.org/img/w/${forecast.icon}.png`} >
                      <p>{forecast.description}</p>
                      <h3>{
                        this.props.mode === 'f' ?
                        toFahrenheit(forecast.temp) + ' °F' :
                        forecast.temp + " °C"
                      }</h3>
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
