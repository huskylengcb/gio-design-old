import { a as __extends, _ as __assign } from '../common/chunk.js';
import { createElement, PureComponent } from 'react';
import { Switch } from 'antd';
import 'antd/lib/switch/style/index.css';

var GIOSwitch = /** @class */ (function (_super) {
    __extends(GIOSwitch, _super);
    function GIOSwitch(props) {
        return _super.call(this, props) || this;
    }
    GIOSwitch.prototype.render = function () {
        return createElement(Switch, __assign({}, this.props));
    };
    GIOSwitch.defaultProps = {
        size: 'default',
        defaultChecked: false,
        disabled: false,
        loading: false,
    };
    return GIOSwitch;
}(PureComponent));

export default GIOSwitch;
