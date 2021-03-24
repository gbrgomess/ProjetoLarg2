import React from 'react';

import { Container } from './styles';

function Input({
  placeholder, type, value, onChange,
}) {
  return (
    <Container>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </Container>

  );
}

export default Input;
