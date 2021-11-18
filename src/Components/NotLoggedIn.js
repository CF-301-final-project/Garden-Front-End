import React from 'react';

class NotLoggedIn extends React.Component {
  render() {
    return (
      <>
        <h1>Don't you want to log in?</h1>
        <img id='pic'
          className='m-2'
          style={{borderRadius: '10px'}}
          alt='plant'  
          src='./images/herbs.jpeg' 
          width={1000} 
          height={600}>
          </img>
      </>
    )
  }
}

export default NotLoggedIn;