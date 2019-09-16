import React from 'react';
import { convertToken } from './helper';

const KVTable = ({ type, data }) => {
  const rows = Object.keys(data).map(key => (
    <tr style={{ height: 40 }}>
      <td>{convertToken(key)}</td>
      <td>{key}</td>
      <td>{data[key]}</td>
    </tr>
  ));
  return (
    <div style={{ marginBottom: 30 }}>
      <h2>{type}</h2>
      <hr style={{ backgroundColor: '#DDD', border: 0, height: 1 }}/>
      <table style={{ minWidth: 800 }}>
        <thead>
          <tr style={{ height: 40 }}>
            <th>Less</th>
            <th>JS</th>
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

export default KVTable;