import React, { useState } from 'react';

//refactored this area to use functional component with hooks instead of the usual class component!
const App = () => {
  const [resource, setResource] = useState('posts');

    return (
      <div>
        <div>
          <button onClick={()=> setResource('posts')}>Post</button>
          <button onClick={() => setResource('to dos')}>To Dos</button>
        </div>
        {resource}
      </div>
    );
}

export default App;
