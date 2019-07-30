import { a as __extends } from '../common/chunk.js';
import React__default from 'react';
import { Radio } from 'antd';
import classnames from 'classnames';
import _ from 'lodash';
import 'antd/lib/radio/style/index.css';

var RButton = Radio.Button;
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        var _a;
        var element = _super.prototype.render.call(this);
        return React__default.cloneElement(element, {
            className: classnames("gio-radio-button", (_a = {},
                _a[this.props.className] = !!this.props.className,
                _a[element.props.className] = !!element.props.className,
                _a))
        });
    };
    return Button;
}(RButton));

var RGroup = Radio.Group;
var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    function Group() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Group.prototype.render = function () {
        var _a;
        var element = _super.prototype.render.call(this);
        return React__default.cloneElement(element, {
            className: classnames("gio-radio-group", (_a = {},
                _a[this.props.className] = !!this.props.className,
                _a[element.props.className] = !!element.props.className,
                _a.small = this.props.size === 'small',
                _a))
        });
    };
    return Group;
}(RGroup));

_.assign(Radio, {
    Button: Button,
    Group: Group
});
var Button$1 = Radio.Button;
var Group$1 = Radio.Group;

export default Radio;
export { Button$1 as Button, Group$1 as Group };
