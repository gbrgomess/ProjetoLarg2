/* eslint-disable no-useless-return */
import React, { useState } from 'react';

import { Container } from './styles';

import Button from '../Button';
import Input from '../Input';

function Cadastro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpass, setConfirmpass] = useState('');

  function handleSingUp() {
    const contentEmail = email.length > 0;
    const contentPassword = password.length > 0;
    const contentConfirmPass = confirmpass.length > 0;
    if (!contentEmail || !contentPassword || !contentConfirmPass) {
      alert('Os campos estão vazios');
    } else if (password !== confirmpass) {
      alert('As senhas inseridas são diferentes!');
    }
  }
  return (
    <Container>
      <Input
        placeholder="Email"
        type="text"
        onChange={(valor) => { setEmail(valor.target.value); }}
        value={email}

      />
      <Input
        placeholder="Password"
        type="password"
        onChange={(valor) => { setPassword(valor.target.value); }}
        value={password}

      />

      <Input
        placeholder="Confirm password"
        type="password"
        onChange={(valor) => { setConfirmpass(valor.target.value); }}
        value={confirmpass}
      />
      <Button
        label="Cadastrar"
        onClick={handleSingUp}
      />

    </Container>
  );
}

export default Cadastro;
