import React from 'react';
import { convertToken } from './helper';
import Tooltip from '@gio-design/components/lib/tooltip';
import { Col } from 'antd';

const KVTable = ({ type, data }) => {
  const rows = Object.keys(data).filter(key => key !== '__esModule').map(key => (
    <tr style={{ height: 40 }}>
      <td>{convertToken(key)}</td>
      <td>{key}</td>
      <td>
        {/^#/.test(data[key]) ? <ColorBlock value={data[key]} /> : data[key]}
      </td>
      <td>{data[key]}</td>
    </tr>
  ));
  return (
    <div style={{ marginBottom: 30, textAlign: 'left' }}>
      <h2>{type}</h2>
      <hr style={{ backgroundColor: '#DDD', border: 0, height: 1 }}/>
      <table style={{ minWidth: 800 }}>
        <thead>
          <tr style={{ height: 40 }}>
            <th>Less</th>
            <th>JS</th>
            <th>Color</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody style={{ fontSize: 14 }}>
          {rows}
        </tbody>
      </table>
    </div>
  )
}

const ColorBlock = ({ value }) => (
  <Tooltip title={value}>
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
  </Tooltip>
);

export default KVTable;