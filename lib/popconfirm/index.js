import { a as __extends, _ as __assign } from '../common/chunk.js';
import React__default from 'react';
import { Popconfirm as Popconfirm$1 } from 'antd';
import 'antd/lib/popconfirm/style/css.js';

var Popconfirm = /** @class */ (function (_super) {
    __extends(Popconfirm, _super);
    function Popconfirm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Popconfirm.prototype.render = function () {
        return (React__default.createElement(Popconfirm$1, __assign({}, this.props)));
    };
    Popconfirm.defaultProps = {
        cancelText: '取消',
        okText: '确定',
        title: '',
        placement: 'top'
    };
    return Popconfirm;
}(React__default.Component));

export default Popconfirm;
