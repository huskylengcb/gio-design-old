import { a as __extends, _ as __assign } from '../common/chunk.js';
import React__default from 'react';
import { Input as Input$1 } from 'antd';
import classnames from 'classnames';
import { omit } from 'lodash';
import '../common/chunk2.js';
import 'antd/lib/input/style/index.css';

var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Input.prototype.render = function () {
        var _a;
        return (React__default.createElement(Input$1, __assign({}, omit(this.props, ['error']), { className: classnames('gio-input', this.props.className, (_a = {},
                _a['gio-input--error'] = this.props.error,
                _a.large = this.props.size === 'large',
                _a.small = this.props.size === 'small',
                _a)) })));
    };
    return Input;
}(React__default.Component));

export default Input;
