  // Import the React and Reactdom libraries
  import React from 'react';
  import ReactDOM from 'react-dom';

  // Create a react component
  const App = () => {
    // the above arrow is the same as const App = function() {}
    return <div>Hi there!</div>;
  }
  // Take the react component and show it on the screen
  ReactDOM.render(
    <App />,
    //This is a built in native function which is why we don't have to build anything.
    document.querySelector('#root')
  );
