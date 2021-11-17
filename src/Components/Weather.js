import React from 'react';
import Accordion from 'react-bootstrap/Accordion'

class Weather extends React.Component {

  render() {
    return (
      <>
        {this.props.weather.slice(0, 5).map((day, idx) => (
          <Accordion defaultActiveKey='0' >
            <Accordion.Item key={idx}>
              <Accordion.Header>{day.date}</Accordion.Header>
              <Accordion.Body>
                <h3>{day.description}</h3>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}
      </>
    );
  }
}

export default Weather