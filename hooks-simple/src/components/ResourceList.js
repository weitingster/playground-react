import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

    return (
      <ul>
        {resources.map(record => (
          <li key={record.id}>{record.title}</li>
        ))}
      </ul>
    );
}

export default ResourceList;
