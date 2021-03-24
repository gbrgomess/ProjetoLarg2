import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container } from './styles';

function Inicial() {
  return (
    <Container>
      <p>Welcome Back</p>
      <div className="painel">
        <Input placeholder="Email address" type="text" />
        <Input placeholder="Password" type="password" />
        <Button />

      </div>

      <p>Forgot your password?</p>
      <p> Don&apos;t have an account? GetStarted</p>

    </Container>

  );
}

export default Inicial;
