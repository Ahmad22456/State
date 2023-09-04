import React from 'react';
import './App.css';
// import Person from './Person';

class App extends React.Component {

  person = {fullName : "x",
            bio: "y",
            imgSrc : "z",
            profession : "h"
          }

  state = {
    show: true,
    secondDate: new Date(),
    lastMount: 0
  }

  currentDate = new Date()

  clickHandle = () => {this.setState({show: !this.state.show })}

  render() {

    const lastMountSec = Math.floor((this.state.secondDate - this.currentDate) / 1000);
    const lastMountMin =  Math.floor(lastMountSec / 60);
    const lastMountHour = Math.floor(lastMountMin / 60);

    const displayCounter = `${lastMountHour %24}:${lastMountMin %60}:${lastMountSec %60}`

    return (
      <>
        <button onClick={this.clickHandle}>Click Me!!</button>
        {this.state.show && (
          <ul>
            <li>{this.person.fullName}</li>
            <li>{this.person.bio}</li>
            <li>{this.person.imgSrc}</li>
            <li>{this.person.profession}</li>
          </ul>
        )}
        <p>{this.currentDate.toLocaleTimeString()}</p>
        <p>{this.state.secondDate.toLocaleTimeString()}</p>
        <p>{displayCounter}</p>
      </>
    )
  }

  componentDidMount(){
    this.interval = setInterval(() => {this.setState({secondDate: new Date()})}, 1000)
    // this.setState({lastMount: (Math.floor((this.state.secondDate - this.currentDate) / 1000))})
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default App;