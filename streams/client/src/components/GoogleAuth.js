import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
      window.gapi.load('client:auth2', () => {
          window.gapi.client.init({
            clientId:
              '999499136528-tpddqve8bkuotjav07tptmp3almq9fkb.apps.googleusercontent.com',
            scope: 'email'
          }).then(() => {
            this.auth = window.gapi.auth2.getAuthInstance();
            this.setState({ isSignedIn: this.auth.isSignedIn.get() })
        });
      });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
        return <div>not sure if signed in</div>;
    } else if (this.state.isSignedIn) {
      return <div>Signed In!</div>
    } else {
      return <div> I am not signed in </div>;
    }
  }

  render() {
    return (
      <div>{this.renderAuthButton()}</div>
    );
  }
}

export default GoogleAuth;
