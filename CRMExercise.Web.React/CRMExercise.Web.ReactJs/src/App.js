import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>CRM React Component</h2>
        </div>
        <p className="App-intro">
          Client Dashboard
        </p>
        <br/>
        <div>
          <Clock />
        </div>
        <Welcome name = 'Vinay' />
        Event Use:    <Toggle />
      </div>      
    );
  }
}

export default App;

function Welcome(props){
    return <h1>Hello, {props.name}. This is User Defined Component, using props and functions</h1>;
}

/*function Clock(props){
  return(
    <div>
          <h1>Hello, world!</h1>
          <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  )
}*/

//Events
class Toggle extends Component{
  constructor(props){
      super(props);
      this.state = {isToggleOn: true};

      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render()
  {
    return(
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}

//State and LifeCycle
class Clock extends Component{
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
  }

  componentWillUnmount() {
      clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render(){
      return(
        <div>
              <h1>Hello, world! This is Class Component</h1>
              <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      )
  }
  
}