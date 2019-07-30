import { a as __extends, _ as __assign } from '../common/chunk.js';
import { createElement, Component } from 'react';
import { Input as Input$1 } from 'antd';
import 'antd/lib/input/style/index.css';

var TextArea = Input$1.TextArea;
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Input.prototype.render = function () {
        return (createElement(TextArea, __assign({}, this.props, { className: "gio-textarea " + this.props.className })));
    };
    return Input;
}(Component));

export default Input;
