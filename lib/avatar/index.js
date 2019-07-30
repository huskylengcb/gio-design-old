import { _ as __assign } from '../common/chunk.js';
import { cloneElement, createElement } from 'react';
import { Avatar as Avatar$1 } from 'antd';
import classnames from 'classnames';
import 'antd/lib/avatar/style/index.css';

// console.info(styles)
var Avatar = function (props) { return cloneElement(createElement(Avatar$1, null), __assign({}, props, { className: classnames(props.className, 'gio-avatar') })); };

export default Avatar;
