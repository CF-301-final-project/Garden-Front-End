import React from "react";
import Card from "react-bootstrap/Card";
import './aboutUs.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithubSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons'
class AboutPage extends React.Component {
  render() {
    
    return (
      <>
        <h1>Meet The Team</h1>

            <div className= 'jeff'>
            <Card style={{ textAlign: "center", width:"18rem" }}>
            <Card.Img variant="top" src= {'Assets/Jeff.jpg'} />
            <Card.Body>
            <Card.Title>Jeff Inman</Card.Title>
            <a href="https://github.com/jinman36">
            <FontAwesomeIcon icon={faGithubSquare} style={{color: 'green'}} size="3x"/>
            </a>
            <a href="https://www.linkedin.com/in/jefferyinman">
            <FontAwesomeIcon icon={faLinkedin} style={{color: 'green'}} size="3x"/>
            </a>
            <Card.Text style={{height: '350px' }}>
            Jeff started working as a senior project engineer in the commercial construction industry after leaving the military in 2008.
He has always been interested in finding technology based solutions to problems and realized that his limited knowledge of things under the hood would continue to restrict him if he continued to let it be a black hole. He turned to the Code Fellows program to help lift that hood and find a good launching point to continue on this journey in technology.

            </Card.Text>
            </Card.Body>
            </Card>
            </div>
            <div className= 'ian'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src= {'Assets/ian.jpg'} />
            <Card.Body>
            <Card.Title>Ian Cargill</Card.Title>
            <a href="https://github.com/idcargill">
            <FontAwesomeIcon icon={faGithubSquare} style={{color: 'green'}} size="3x"/>
            </a>
            <a href="https://www.linkedin.com/in/ian-cargill-080194107/">
            <FontAwesomeIcon icon={faLinkedin} style={{color: 'green'}} size="3x"/>
            </a>                         
            <Card.Text style={{height: '350px' }}>
            Ian joined Code Fellows through a software developer training program at Zillow. Originally interested in data analytics, he has switched focus to front end development after building several tools that were successful in streamlining daily business operations. He will be continuing his studies with Code Fellows 401 and is the most recent addition to the Truia Web Team.
            </Card.Text>
            </Card.Body>
            </Card>
            </div>
            <div className='josh'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src= {'Assets/Joshua.jpg'} />
            <Card.Body>
            <Card.Title>Joshua Huston</Card.Title>
            <a href="https://github.com/jhuston5">
            <FontAwesomeIcon icon={faGithubSquare} style={{color: 'green'}} size="3x"/>
            </a>
            <a href="https://www.linkedin.com/in/joshua-huston/">
            <FontAwesomeIcon icon={faLinkedin} style={{color: 'green'}} size="3x"/>
            </a>
            <Card.Text  style={{height: '350px' }}>
            Josh came to Code Fellows after gaining exposure to technical products and teams through his work at Zillow. He currently works as a data analyst and an officer in the Army National Guard. His goal is to learn front-end development, then go on to learn Python in 401. He will then solidify his technical skills for the next year as an apprentice front-end software engineer on the Home Details Page team at Zillow.
            
            </Card.Text>
            </Card.Body>
            </Card>
            </div>

            <div className = 'oz'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src= {'Assets/oz-pic.jpg'} />
            <Card.Body>
            <Card.Title>Osborn Del Angel</Card.Title>
            <a href="https://github.com/Ozdelangel">
            <FontAwesomeIcon icon={faGithubSquare} style={{color: 'green'}} size="3x"/>
            </a>
            <a href="https://www.linkedin.com/in/osborndelangel/">
            <FontAwesomeIcon icon={faLinkedin} style={{color: 'green'}} size="3x"/>
            </a>
            <Card.Text  style={{height: '350px' }}>
            Osborn Del Angel is a Software Developer from Vancouver, Wa but now residing in Boring, OR with a background in Manufacturing. He chose to pivot and choose a career in Software Development because he wanted a career that was fulfilling and wanted to be able to support his family better. He was attracted to the field because the work was more challenging and the constant quest for knowledge never stops.
            </Card.Text>
            
            </Card.Body>
            </Card>
            </div>

            
            
      </>
    );
  }
}

export default AboutPage;
