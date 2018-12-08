import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    // The constructor method will be called before anything else
    // This is initializing the state
    // Not always required to add "props" property
  super(props);
  // super is a reference to the parent's function React.Component
  // must do every time when we initialize a class function

  // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT TO this.state
  this.state = { lat: null, errorMessage: '' };
  // when we don't know what the number, i.e. what the latitude is, yet we will write null.

  window.navigator.geolocation.getCurrentPosition(
    position => {
      // we called setState!
      this.setState({ lat: position.coords.latitude });
    },
    err => {
      this.setState({ errorMessage: err.message });
    }
  );
}

  // React says we have to define render!!
  // Required for every single component
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Erorr: {this.state.errorMessage} </div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
