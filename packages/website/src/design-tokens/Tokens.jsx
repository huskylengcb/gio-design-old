import React from 'react';
import ColorTable from './ColorTable';
import KVTable from './KVTable';
import {
  colors,
  backgroundColors,
  borderColors,
  textColors,
  shadow,
  fontSize,
  radius
} from '@gio-design/tokens';

const Tokens = () => {
  console.info(shadow)
  return (
    <div>
      <ColorTable type='Colors' colors={colors} />
      <ColorTable type='Background Colors' colors={backgroundColors} />
      <ColorTable type='Border Colors' colors={borderColors} />
      <ColorTable type='Text Colors' colors={textColors} />
      <KVTable type='Font Size' data={fontSize} />
      <KVTable type='Radius' data={radius} />
      <KVTable type='Shadow' data={shadow} />
    </div>
  );
}

export default Tokens;