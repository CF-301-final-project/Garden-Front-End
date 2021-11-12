import React from 'react';
import Accordion from 'react-bootstrap/Accordion'


class Weather extends React.Component {

  render() {
    console.log(this.props.weather)
    return (
      <>
        {this.props.weather.map((day, idx) => (
          <Accordion defaultActiveKey={idx} >
            <Accordion.Item key={idx}>
              <Accordion.Header>{day.datetime}</Accordion.Header>
              <Accordion.Body>
                <h3>{day.weather.description}</h3>
              </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        ))}
          </>
    );
  }
}

export default Weather