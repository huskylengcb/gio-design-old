import { a as __extends, _ as __assign } from '../common/chunk.js';
import React__default from 'react';
import 'classnames';
import 'lodash';
import '../common/chunk2.js';
import Icon from '../icon/index.js';

var ErrMsg = /** @class */ (function (_super) {
    __extends(ErrMsg, _super);
    function ErrMsg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrMsg.prototype.render = function () {
        var style = __assign({ marginRight: '2px' }, this.props.style);
        return (React__default.createElement("div", { className: 'gio-err-msg' },
            this.props.iconName && (React__default.createElement(Icon, { name: this.props.iconName, fill: this.props.iconFill, size: this.props.iconSize, style: style })),
            this.props.msg));
    };
    return ErrMsg;
}(React__default.PureComponent));

export default ErrMsg;
