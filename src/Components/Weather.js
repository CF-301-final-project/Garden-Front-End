import React from 'react';
import Accordion from 'react-bootstrap/Accordion'


class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 5
    };
  }

  render() {
    console.log(this.props.weather)
    return (
      <>
        {this.props.weather.slice(0, 5).map((day, idx) => (
          <Accordion defaultActiveKey={idx} >
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