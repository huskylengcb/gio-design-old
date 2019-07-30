import { a as __extends, b as __rest, _ as __assign } from '../common/chunk.js';
import React__default from 'react';
import { Select as Select$1 } from 'antd';
import classnames from 'classnames';
import { b as blurActiveElement } from '../common/chunk2.js';
import 'antd/lib/select/style/index.css';
import 'antd/lib/style/index.css';

var pinyinMatch = require('pinyin-match');
function isContain(target, source) {
    if (target === void 0) { target = ''; }
    if (source === void 0) { source = ''; }
    if (!target) {
        target = '';
    }
    if (!source) {
        source = '';
    }
    return !!pinyinMatch.match(target, source);
}

var OptGroup = Select$1.OptGroup;
var Option = Select$1.Option;
var filterOption = function (input, child) {
    var option = child.props.children || '';
    return isContain(option.toString(), input);
};
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Select.prototype.render = function () {
        var _a, _b;
        var _c = this.props, children = _c.children, className = _c.className, dropdownClassName = _c.dropdownClassName, _d = _c.isAutoBlurAfterSelect, isAutoBlurAfterSelect = _d === void 0 ? false : _d, onChange = _c.onChange, onSelect = _c.onSelect, props = __rest(_c, ["children", "className", "dropdownClassName", "isAutoBlurAfterSelect", "onChange", "onSelect"]);
        var _props = __assign({}, props, { onChange: onChange, onSelect: onSelect });
        if (isAutoBlurAfterSelect) {
            var blurAfterOnChange = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                blurActiveElement();
                if (typeof onChange === 'function') {
                    onChange.apply(null, args);
                }
            };
            var blurAfterOnSelect = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                blurActiveElement();
                if (typeof onSelect === 'function') {
                    onSelect.apply(null, args);
                }
            };
            _props = __assign({}, props, { onChange: blurAfterOnChange, onSelect: blurAfterOnSelect });
        }
        return (React__default.createElement(Select$1, __assign({ className: classnames('gio-select', (_a = {}, _a[className] = !!className, _a)), dropdownClassName: classnames('gio-select-dropdown', (_b = {},
                _b[dropdownClassName] = !!dropdownClassName,
                _b)), filterOption: filterOption }, _props), children));
    };
    return Select;
}(React__default.Component));
Select.OptGroup = Select$1.OptGroup;
Select.Option = Select$1.Option;

export default Select;
export { OptGroup, Option };
