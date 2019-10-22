import React from 'react';
import ColorTable from './ColorTable';
import KVTable from './KVTable';
import * as tokens from '@gio-design/tokens';

const Tokens = () => {
  console.info(tokens);
  return (
    <KVTable type='Tokens' data={tokens} />
  );
}

export default Tokens;