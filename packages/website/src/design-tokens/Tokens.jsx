import React from 'react';
import ColorTable from './ColorTable';
import {
  colors,
  backgroundColors,
  borderColors,
  textColors
} from '@gio-design/tokens';

const Tokens = () => {
  return (
    <div>
      <ColorTable type='Colors' colors={colors} />
      <ColorTable type='Background Colors' colors={backgroundColors} />
      <ColorTable type='Border Colors' colors={borderColors} />
      <ColorTable type='Text Colors' colors={textColors} />
    </div>
  );
}

export default Tokens;