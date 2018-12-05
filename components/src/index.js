import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'; //This is from the faker js data set
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">

      <ApprovalCard>
        <div>
        <h4>Warning!</h4>
        So good to hear from you!
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
        author="Sam"
        timeAgo="Today at 4:30PM"
        actualComment="Wow, that's awesome"
        avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
      <CommentDetail
        author="Jane"
        timeAgo="Today at 2:00AM"
        actualComment="Dude, sweet"
        avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
      <CommentDetail
        author="Billy"
        timeAgo="Yesterday at 2:39PM"
        actualComment="Nailed it!"
        avatar={faker.image.avatar()}
        />
      </ApprovalCard>

    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))
