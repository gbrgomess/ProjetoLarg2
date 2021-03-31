import React from 'react';
// import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container } from './styles';

function Inicial() {
  return (
    <Container>
      <p className="welcome">Welcome Back! </p>
      <div className="painel">
        <Input placeholder="Email address" type="text" />
        <Input placeholder="Password" type="password" />
        <Button label="Login" />

      </div>
      <a href="ads" className="link1">Forgot your password?</a>
      <a href="asd" className="link1">
        Don&apos;t have an account?
        {' '}
        <strong>Get Started</strong>
      </a>

    </Container>

  );
}

export default Inicial;
