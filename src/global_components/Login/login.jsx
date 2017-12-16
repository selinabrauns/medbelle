import React, { Component } from 'react';
import Input from '../Input';
import Button from '../Button';
import './login.scss';

class Login extends Component {
  render() {
    return <div className="login">
      <Input className="username" />
      <Input type="password" className="password"/>
      <Button>Login</Button>
    </div>
  }
}

export default Login;