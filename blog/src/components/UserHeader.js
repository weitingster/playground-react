import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render () {
    //const user = this.props.users.find((user) => user.id === this.props.userId );
    const { user } = this.props; // now only checks ONE user instead of all the users

    if (!user) {
      return null;
    }

    return (
      <div className="header">
        {user.name}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
