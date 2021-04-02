import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import Cadastro from '../../components/Cadastro';
import Login from '../../components/Login';

import { Container } from './styles';

function Inicial() {
  const [esconder, setEsconder] = useState(false);
  return (
    <Container>
      <img src={`${process.env.PUBLIC_URL}/email.png`} width="25" alt="logo" />
      <h1>Welcome back!</h1>
      <div className="painel">
        {!esconder
          ? <Login />
          : <Cadastro />}

      </div>
      <div className="footer">
        <a href="ads" className="link1">Forgot your password?</a>
        <button type="button" onClick={() => setEsconder(() => !esconder)}>
          {' '}
          Don&apos;t have an account?
          {' '}
          <strong>Get Started</strong>
        </button>

      </div>

    </Container>

  );
}

export default Inicial;
