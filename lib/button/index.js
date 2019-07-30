import { a as __extends, _ as __assign } from '../common/chunk.js';
import { createElement, PureComponent } from 'react';
import { Button, Tooltip } from 'antd';
import classnames from 'classnames';
import 'antd/lib/button/style/index.less';
import 'antd/lib/tooltip/style/index.less';
import { startsWith, pick } from 'lodash';

function pickEventProps(props, picked) {
    if (picked === void 0) { picked = []; }
    var keys = Object.keys(props).filter(function (prop) {
        return startsWith(prop, 'on') || picked.indexOf(prop) >= 0;
    });
    return pick(props, keys);
}

var Group = Button.Group;
var GIOButton = /** @class */ (function (_super) {
    __extends(GIOButton, _super);
    function GIOButton(props) {
        var _this = _super.call(this, props) || this;
        _this.handleButtonClick = function (e) {
            var _a = _this.props, disabled = _a.disabled, onClick = _a.onClick, value = _a.value;
            if (disabled) {
                return;
            }
            if (onClick) {
                onClick(e, value);
            }
        };
        return _this;
    }
    GIOButton.prototype.render = function () {
        var _a, _b;
        var button;
        if (this.props.withoutBg) {
            var classNames_1 = classnames('gio-btn gio-btn-without-bg', (_a = {}, _a['gio-btn-' + this.props.type] = !!this.props.type, _a), { disabled: this.props.disabled }, { undisabled: !this.props.disabled }, this.props.className);
            button = (createElement("a", __assign({}, pickEventProps(this.props, ['size', 'type']), { className: classNames_1, onClick: this.handleButtonClick }), this.props.children));
        }
        else {
            var classNames_2 = classnames('gio-btn gio-btn-with-bg', (_b = {}, _b['gio-btn-' + this.props.type] = !!this.props.type, _b), { rounded: this.props.rounded }, { disabled: this.props.disabled }, { undisabled: !this.props.disabled }, { long: this.props.long }, this.props.className);
            button = (createElement(Button, __assign({}, pickEventProps(this.props, ['size', 'type']), { className: classNames_2, onClick: this.handleButtonClick, loading: this.props.loading }), this.props.children));
        }
        if (this.props.tooltip) {
            var placement = this.props.tooltipPlacement ? this.props.tooltipPlacement : 'top';
            return (createElement(Tooltip, { title: this.props.tooltip, placement: placement },
                createElement("span", { className: 'gio-btn-wrapper' }, button)));
        }
        return button;
    };
    GIOButton.defaultProps = {
        tooltip: '',
        className: '',
        type: 'primary',
        size: 'large',
        rounded: false,
        withoutBg: false,
        disabled: false,
        long: false,
        loading: false,
    };
    return GIOButton;
}(PureComponent));
GIOButton.Group = Button.Group;

export default GIOButton;
export { Group };
