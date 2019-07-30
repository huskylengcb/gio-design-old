import { a as __extends } from '../common/chunk.js';
import React__default from 'react';
import { Table } from 'antd';
import classnames from 'classnames';
import 'antd/lib/table/style/index.css';
import 'antd/lib/pagination/style/index.css';

var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getRowClickHandler = function (record, index, event) {
            if (_this.props.onRowClick) {
                _this.props.onRowClick(record, index, event);
            }
        };
        _this.getRowClassName = function (record, index) {
            if (_this.props.selectRow === index) {
                return 'select-row';
            }
            return null;
        };
        _this.onChange = function (pagination, filters, sorter) {
            if (_this.props.onChange) {
                _this.props.onChange(pagination, filters, sorter);
            }
        };
        return _this;
    }
    List.prototype.render = function () {
        var _this = this;
        return (React__default.createElement("div", null,
            this.props.header,
            React__default.createElement(Table, { className: classnames('gio-list', this.props.className), columns: this.props.columns, dataSource: this.props.dataSource, bordered: this.props.bordered, pagination: this.props.pagination, loading: this.props.loading, rowKey: this.props.rowKey, rowSelection: this.props.rowSelection, 
                // onRowClick={this.getRowClickHandler}
                onRow: function (record, index) {
                    return {
                        onClick: function (event) {
                            if (_this.props.onRowClick) {
                                _this.props.onRowClick(record, index, event);
                            }
                        }
                    };
                }, rowClassName: this.getRowClassName, scroll: this.props.scroll, size: this.props.size, onChange: this.onChange }),
            this.props.footer));
    };
    List.defaultProps = {
        columns: [],
        dataSource: [],
        bordered: false,
        header: null,
        footer: null,
        pagination: {},
        loading: false,
        rowKey: 'key',
        rowSelection: null,
        scroll: {},
        size: 'default',
        className: null
    };
    return List;
}(React__default.Component));

export default List;
