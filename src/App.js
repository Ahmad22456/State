import React from 'react';
import './App.css';
import menu from './menu.svg'
import close from './close.svg'

// Transforming the app into a class component
class App extends React.Component {

  // Creating the person object class variable
  person = {fullName : "Austin Steve",
            profession: "Programmer",
            imgSrc : "/A.jpg",
            bio : `Austin Steve is a seasoned programmer with a passion for solving complex problems through elegant code.
             With over a decade of experience in software development, he has a knack for turning ideas into functional applications. 
             Austin's expertise spans various programming languages and technologies, making her a versatile developer capable of tackling a wide range of projects. 
             he is known for her meticulous attention to detail, commitment to writing clean and efficient code, 
             and her dedication to staying at the forefront of technological advancements. 
             Outside of coding, Austin enjoys hiking and exploring new coffee shops in her city.`
          }

  // Declaring the state variables
  state = {
    show: false,
    liveDate: new Date(),
    // lastMount: 0
  }

  // Creating additional variables and methods for perserving date and manipulating the state
  mountDate = new Date()

  clickHandle = () => {this.setState({show: !this.state.show })}

  render() {

    // Calculating the mount time in hours, minutes and seconds
    const lastMountSec = Math.floor((this.state.liveDate - this.mountDate) / 1000);
    const lastMountMin =  Math.floor(lastMountSec / 60);
    const lastMountHour = Math.floor(lastMountMin / 60);

    function doubleDigit(x) {
      return x < 10 ? `0${x}` : x
    }

    // function doubleDigit(x) {
    //   return x < 10 ? 0`${x}` : x
    // }

    // Combining the time in order to display it later
    const displayCounter = `${doubleDigit(lastMountHour %24)}:${doubleDigit(lastMountMin %60)}:${doubleDigit(lastMountSec %60)}`

    return (
      <>
      {/* Creating the nav bar */}
        <nav className='navBar'>
          <p className='navText'>React State</p>
          <img src={this.state.show ? close : menu} alt='Menu' className='navMenu' onClick={this.clickHandle}/>
          {/* Creating the list to only be displayed corresponding to the show variable*/}
          {this.state.show && (
            <ul className='navList'>
              <li className='listItem listItemFirst'><img src={this.person.imgSrc} alt='Icon' className='listImage' /></li>
              <li className='listItem'>Name: {this.person.fullName}</li>
              <li className='listItem'>Profession: {this.person.profession}</li>
              <li className='listItem' style={{textAlign:'justify', lineHeight:'1.5rem'}}>Bio:<br/>{this.person.bio}</li>
            </ul>
          )}
        </nav>
        {/* Displaying the time since last mount */}
        {/* <p>{this.mountDate.toLocaleTimeString()}</p>
        <p>{this.state.liveDate.toLocaleTimeString()}</p> */}
        <p className='counter'>{displayCounter}</p>
      </>
    )
  }

  componentDidMount(){
    // Continuously calculating the new time every second
    this.interval = setInterval(() => {this.setState({liveDate: new Date()})}, 1000)
    // this.setState({lastMount: (Math.floor((this.state.liveDate - this.mountDate) / 1000))})
  }

  componentWillUnmount() {
    //  Removing the interval so it doesn't create memory leaks
    clearInterval(this.interval);
  }
}

export default App;