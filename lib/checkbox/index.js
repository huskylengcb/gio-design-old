import { b as __rest, _ as __assign } from '../common/chunk.js';
import { createElement } from 'react';
import { Checkbox as Checkbox$1 } from 'antd';
import classnames from 'classnames';
import 'antd/lib/checkbox/style/index.css';

var Checkbox = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (createElement(Checkbox$1, __assign({ className: classnames(className, 'gio-checkbox') }, props)));
};
Checkbox.defaultProps = {};
var Group = Checkbox$1.Group;

export default Checkbox;
export { Group };
