import React from 'react';
import themes from '@gio-design/themes';

const ThemeList = () => (
  <ul>
    {
      Object.keys(themes).map(t => (
        <li style={{ color: themes[t].colorPrimary}}>{t}</li>
      ))
    }
  </ul>
)

export default ThemeList;