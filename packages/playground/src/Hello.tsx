import React, { useContext } from 'react';
import Icon from '@gio-design/icon';
import { ThemeContext } from './context';
import styled from 'styled-components';

const Hello = (props:any) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Wrapper theme={theme}>
      <button onClick={() => toggleTheme('origin')}>origin</button>
      <button onClick={() => toggleTheme('indigo')}>indigo</button>
      <br />
      <Icon type='wechat' />
      GrowingIO Design System Themes
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: ${props => props.theme.colorPrimary}
`;

export default Hello;