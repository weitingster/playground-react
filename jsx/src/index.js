// Import the React and Reactdom libraries
import React from 'react';
import ReactDOM from 'react-dom';


// Create a react component
const App = () => {
  // the above arrow is the same as const App = function() {}
  const buttonText = { text: 'Click me' };
  const labelText = 'Enter name:';

  return (
    // Multi-line JSX after the return wrapped in <div> should start on a
    //new line but, have enclosing brackets (); to indicate to the return to
    // not return an "UNDEFINED" value.
    <div>
    <label className="label" htmlFor="name">
      {labelText}
    </label>
    <input id="name" type="text" />
    <button style={{ backgroundColor: 'blue', color: 'white' }}>
      {buttonText.text}
    </button>
    </div>
  );
};
// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
//This is a built in native function which is why we don't have to build anything.
