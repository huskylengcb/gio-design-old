import { a as __extends, _ as __assign } from '../common/chunk.js';
import React__default, { PureComponent } from 'react';
import { Tooltip } from 'antd';
import classnames from 'classnames';
import { noop } from 'lodash';
import 'antd/lib/checkbox/style/index.css';
import Checkbox from '../checkbox/index.js';
import '../common/chunk2.js';
import Icon from '../icon/index.js';

var getDisplayName = function (Component) { return Component.displayName || Component.name || 'Component'; };
function pure(Component) {
    var HOC = /** @class */ (function (_super) {
        __extends(HOC, _super);
        function HOC() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HOC.prototype.render = function () {
            return React__default.createElement(Component, __assign({}, this.props));
        };
        return HOC;
    }(React__default.PureComponent));
    HOC.displayName = "withPure(" + getDisplayName(Component) + ")";
    return HOC;
}

var Block = function (_a) {
    var _b = _a.top, top = _b === void 0 ? 0 : _b, _c = _a.bottom, bottom = _c === void 0 ? 0 : _c, _d = _a.right, right = _d === void 0 ? 0 : _d, _e = _a.left, left = _e === void 0 ? 0 : _e, height = _a.height, width = _a.width, _f = _a.onClick, onClick = _f === void 0 ? noop : _f, children = _a.children, className = _a.className, _g = _a.classNames, classNames = _g === void 0 ? [] : _g;
    return (React__default.createElement("div", { style: {
            paddingBottom: bottom,
            paddingLeft: left,
            paddingRight: right,
            paddingTop: top,
            height: height,
            width: width
        }, onClick: onClick, className: classnames.apply(void 0, [className].concat(classNames)) }, children));
};
var Block$1 = pure(Block);

var Margin = function (_a) {
    var _b = _a.top, top = _b === void 0 ? 0 : _b, _c = _a.bottom, bottom = _c === void 0 ? 0 : _c, _d = _a.right, right = _d === void 0 ? 'auto' : _d, _e = _a.left, left = _e === void 0 ? 'auto' : _e, _f = _a.visible, visible = _f === void 0 ? true : _f, _g = _a.classname, classname = _g === void 0 ? '' : _g, children = _a.children;
    return (React__default.createElement("div", { style: {
            marginBottom: bottom,
            marginLeft: left,
            marginRight: right,
            marginTop: top,
            display: visible ? undefined : 'none'
        }, className: classname }, children));
};
var Margin$1 = pure(Margin);

var OptionGroup = function (_a) {
    var children = _a.children, label = _a.label;
    return (React__default.createElement(Block$1, { classNames: [
            'gio-option-group',
        ] },
        React__default.createElement("div", { className: 'gio-option-group-label' }, label),
        children));
};

var Gap = /** @class */ (function (_super) {
    __extends(Gap, _super);
    function Gap(props) {
        return _super.call(this, props) || this;
    }
    Gap.prototype.render = function () {
        var height = this.props.height;
        var width = "" + this.props.width + (typeof this.props.width === 'number' ? 'px' : '');
        if (this.props.float && !height) {
            height = 1;
        }
        height = "" + height + (typeof height === 'number' ? 'px' : '');
        return this.props.height ? (React__default.createElement("div", { className: 'gio-gap', style: { height: height } })) : (React__default.createElement("span", { className: 'gio-gap', style: { display: 'inline-block', width: width, height: height, float: this.props.float } }));
    };
    Gap.defaultProps = {
        width: 0,
        height: 0
    };
    return Gap;
}(React__default.Component));

var Ellipsis = /** @class */ (function (_super) {
    __extends(Ellipsis, _super);
    function Ellipsis() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            tooltip: false
        };
        _this.textRef = null;
        _this.setTextRef = function (ref) {
            if (ref) {
                _this.textRef = ref;
            }
            else {
                _this.textRef = null;
            }
        };
        _this.detectTooltip = function () {
            _this.setTooltip();
            // IE、Firefox下多行省略不兼容，限制行数。
            _this.limitLineNumbers();
        };
        _this.setTooltip = function () {
            var tooltip = false;
            if (_this.textRef && _this.textRef.scrollWidth > _this.textRef.clientWidth) {
                tooltip = true;
            }
            if (tooltip !== _this.state.tooltip) {
                _this.setState({ tooltip: tooltip });
            }
        };
        _this.limitLineNumbers = function () {
            var line = _this.props.line;
            if (!line) {
                return;
            }
            if (_this.textRef) {
                var lineHeight = parseInt(getComputedStyle(_this.textRef)['line-height'], 10);
                if (typeof lineHeight === 'number' && !isNaN(lineHeight)) {
                    _this.textRef.style.maxHeight = line * lineHeight + 'px';
                }
            }
        };
        return _this;
    }
    Ellipsis.prototype.componentDidMount = function () {
        this.detectTooltip();
    };
    Ellipsis.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.title !== this.props.title) {
            this.detectTooltip();
        }
    };
    Ellipsis.prototype.render = function () {
        var _a = this.props, children = _a.children, line = _a.line, title = _a.title, maxWidth = _a.maxWidth, style = _a.style, placement = _a.placement;
        var _style = __assign({ maxWidth: maxWidth }, style);
        if (!line) {
            return (React__default.createElement(Tooltip, { title: this.state.tooltip ? title : '', placement: placement, overlayStyle: { wordWrap: 'break-word' } },
                React__default.createElement("span", { className: 'gio-ui-single-line-ellipsis', ref: this.setTextRef, style: _style }, children)));
        }
        return (React__default.createElement(Tooltip, { title: '' },
            React__default.createElement("span", { className: "gio-ui-ellipsis gio-ui-ellipsis__line--" + line, style: __assign({ boxOrient: 'vertical', lineClamp: line }, _style), ref: this.setTextRef }, children)));
    };
    return Ellipsis;
}(PureComponent));

var CheckOption = /** @class */ (function (_super) {
    __extends(CheckOption, _super);
    function CheckOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function () {
            if (!_this.props.onClick || _this.props.disabled) {
                return;
            }
            _this.props.onClick(_this.props.value);
        };
        return _this;
    }
    CheckOption.prototype.render = function () {
        var _a, _b;
        var _c = this.props, checked = _c.checked, children = _c.children, className = _c.className, _d = _c.disabled, disabled = _d === void 0 ? false : _d, bottom = _c.bottom, title = _c.title;
        return (React__default.createElement(Margin$1, { bottom: bottom },
            React__default.createElement(Block$1, { onClick: this.handleChange, left: 15, classNames: [
                    'gio-check-option',
                    (_a = {},
                        _a['gio-check-option--checked'] = checked,
                        _a),
                    (_b = {},
                        _b['gio-check-option--disabled'] = disabled,
                        _b),
                    className
                ] },
                React__default.createElement(Ellipsis, { title: title },
                    React__default.createElement(Checkbox, { checked: checked, onChange: noop, disabled: disabled }),
                    React__default.createElement(Gap, { width: 3 }),
                    children))));
    };
    return CheckOption;
}(PureComponent));

var Option = /** @class */ (function (_super) {
    __extends(Option, _super);
    function Option() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function () {
            _this.props.onClick(_this.props.value);
        };
        return _this;
    }
    Option.prototype.render = function () {
        var _a, _b;
        var _c = this.props, checked = _c.checked, children = _c.children, disabled = _c.disabled, bottom = _c.bottom;
        return (React__default.createElement(Margin$1, { bottom: bottom },
            React__default.createElement(Block$1, { onClick: this.handleChange, left: 15, classNames: [
                    'gio-option',
                    (_a = {},
                        _a['gio-option--checked'] = checked,
                        _a),
                    (_b = {},
                        _b['gio-option--diabled'] = disabled,
                        _b)
                ] },
                children,
                checked ? React__default.createElement(Icon, { name: 'gicon-check1', fill: '#F48267' }) : null)));
    };
    return Option;
}(React__default.PureComponent));
Option.defaultProps = {
    onClick: noop
};

export default Option;
export { CheckOption, OptionGroup };
