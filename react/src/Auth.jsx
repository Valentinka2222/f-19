import React, { Component } from 'react';
import Logout from './Logout';
import Login from './Login';
import Spinner from './Spinner';

//state
//isLoggedIn: bool
//isProcessing: bool
//
//

class Auth extends Component {
  render() {
    return (
      <>
        <Login />
        <Logout />
        <Spinner />
      </>
    );
  }
}
export default Auth;
