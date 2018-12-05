import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'; //This is from the faker js data set
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">

      <CommentDetail
      author="Sam"
      timeAgo="Today at 4:30PM"
      actualComment="Wow, that's awesome"
      avatar={faker.image.avatar()}
      />

      <CommentDetail
      author="Jane"
      timeAgo="Today at 2:00AM"
      actualComment="Dude, sweet"
      avatar={faker.image.avatar()}
      />

      <CommentDetail
      author="Billy"
      timeAgo="Yesterday at 2:39PM"
      actualComment="Nailed it!"
      avatar={faker.image.avatar()}
      />

    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))
