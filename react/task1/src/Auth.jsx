import React, { Component } from 'react';
import Logout from './Logout';
import Login from './Login';
import Spinner from './Spinner';

//state
//isLoggedIn: bool
//isProcessing: bool
//
//

//algo
//1.show logic by default+
//2.after login click - show spinner for 2 sec+
//3.hide Spinner, show Logout+
//4.after Logout click - show Login

class Auth extends Component {
  state = {
    isLoggedIn: false,
    isProcessing: false,
  };

  loginHandler = () => {
    console.log('RUN');
    this.setState({
      isProcessing: true,
    });

    setTimeout(() => {
      this.setState({
        isProcessing: false,
        isLoggedIn: true,
      });
    }, 2000);
  };
  logoutHandler = () => {
    //input:obj
    //output:undefined
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const { isProcessing, isLoggedIn } = this.state;
    if (isProcessing) {
      return <Spinner></Spinner>;
    }
    if (isLoggedIn) {
      return <Logout onLogout={this.logoutHandler}></Logout>;
    }

    return <Login onLogin={this.loginHandler} />;
  }
}
export default Auth;
