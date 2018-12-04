import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'; //This is from the faker js data set
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))
