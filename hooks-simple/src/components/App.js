import React, { useState } from 'react';
import ResourceList from './ResourceList';

//refactored this area to use functional component with hooks instead of the usual class component!
const App = () => {
  const [resource, setResource] = useState('posts');

    return (
      <div>
        <div>
          <button onClick={()=> setResource('posts')}>Post</button>
          <button onClick={() => setResource('todos')}>To Dos</button>
        </div>
        <ResourceList resource={resource} />
      </div>
    );
}

export default App;
