import { a as __extends, _ as __assign } from '../common/chunk.js';
import React__default from 'react';
import classnames from 'classnames';
import { assign, omit, noop } from 'lodash';
import { i as isNumber } from '../common/chunk2.js';

var iconfontUrl = '//at.alicdn.com/t/font_362788_xrtna2v802n.js';

var styleMap = {
    small: { width: '12px', height: '12px' },
    middle: { width: '14px', height: '14px' },
    mediumLarge: { width: '16px', height: '16px' },
    large: { width: '18px', height: '18px' },
    huge: { width: '24px', height: '24px' },
    textBottom: { verticalAlign: 'text-bottom' }
};
var disabledStyle = {
    fill: '#E1DAE6',
    cursor: 'not-allowed'
};
var baseStyle = {
    width: '14px;',
    height: '14px',
    overflow: 'hidden',
    verticalAlign: '-0.15em'
};
var Icon = /** @class */ (function (_super) {
    __extends(Icon, _super);
    function Icon(props) {
        var _this = _super.call(this, props) || this;
        if (!document.getElementById('giconJs')) {
            var fontJs = document.createElement('script');
            fontJs.id = 'giconJs';
            fontJs.src = iconfontUrl;
            document.getElementsByTagName('head')[0].appendChild(fontJs);
        }
        return _this;
    }
    Icon.prototype.render = function () {
        var style = assign({}, baseStyle, (this.props.disablePointer ? {} : { cursor: 'pointer' }), (this.props.fill ? { fill: this.props.fill } : {}), styleMap[this.props.size], styleMap[this.props.valign], this.props.svgStyle, this.props.disabled ? disabledStyle : {});
        if (isNumber(this.props.size)) {
            style.width = this.props.size + 'px';
            style.height = this.props.size + 'px';
        }
        if (this.props.verticalAlign) {
            style.verticalAlign = this.props.verticalAlign;
        }
        // icon所对应的svg
        var iconSvg = React__default.createElement("svg", { className: classnames('gio-icon', 'gio-' + this.props.name, this.props.svgClassName), style: style },
            React__default.createElement("use", { xlinkHref: '#' + this.props.name }));
        return (React__default.createElement("span", __assign({}, omit(this.props, 'svgStyle', 'disablePointer', 'valign'), { onClick: this.props.disabled ? noop : this.props.onClick, style: this.props.style || {}, className: classnames('gio-icon-wrapper', this.props.className) }), iconSvg));
    };
    Icon.defaultProps = {
        name: '',
        size: 'middle',
        disablePointer: false,
        valign: '',
        fill: '',
        onClick: noop,
        disabled: false
    };
    return Icon;
}(React__default.Component));

export default Icon;
