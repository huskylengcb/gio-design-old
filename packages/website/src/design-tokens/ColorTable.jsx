import React from 'react';
import { convertToken } from './helper';

const rgb2hex = (rgb) => 
  rgb && '#' + rgb
    .replace(/[^0-9|,]/g, '')
    .split(',')
    .map(s => parseInt(s).toString(16))
    .join('')
    .toUpperCase();

const ColorBlock = ({ value }) => (
  <span
    style={{
      display: 'inline-block',
      verticalAlign: 'middle',
      marginLeft: '10px',
      width: '60px',
      height: '20px',
      backgroundColor: value,
      borderRadius: '4px',
      boxShadow: '0 0 3px 1px #EEE'
    }}
  />
);

const ColorTable = ({
  type,
  colors
}) => {
  const cs = Object.keys(colors);
  const rows = cs.sort().map(key => {
    const rgb = colors[key];
    const hex = rgb2hex(rgb);
    return (
      <tr style={{ height: 40 }}>
        <td>{convertToken(key)}</td>
        <td>{key}</td>
        <td>{hex}</td>
        <td>{rgb}</td>
        <td>
          <ColorBlock value={hex} />
        </td>
      </tr>
    )
  })
  return (
    <div style={{ marginBottom: 30 }}>
      <h2>{type}</h2>
      <hr style={{ backgroundColor: '#DDD', border: 0, height: 1 }}/>
      <table style={{ minWidth: 800 }}>
        <thead>
          <tr>
            <th>Less</th>
            <th>JS</th>
            <th>hex</th>
            <th>rgb</th>
            <th>Theme: origin</th>
          </tr>
        </thead>
        <tbody style={{ fontSize: 14 }}>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

export default ColorTable;