import { a as __extends, _ as __assign } from '../common/chunk.js';
import React__default, { createElement, Component } from 'react';
import { Popover, Dropdown, Tooltip } from 'antd';
import 'classnames';
import 'antd/lib/button/style/index.less';
import 'antd/lib/tooltip/style/index.less';
import 'lodash';
import Button from '../button/index.js';
import 'antd/lib/calendar/style/index.css';
import 'antd/lib/date-picker/style/index.css';
import '../common/chunk2.js';
import Icon from '../icon/index.js';
import moment from 'moment';
import 'antd/lib/dropdown/style/index.css';
import 'antd/lib/popover/style/index.css';

var HeaderLabel = function (_a) {
    var type = _a.type, value = _a.value, locale = _a.locale;
    return (React__default.createElement("h4", { className: 'gio-datepicker-header' },
        React__default.createElement("label", null, type === 'start' ? startText(locale) : endText(locale)),
        React__default.createElement("span", null, value)));
};
var startText = function (locale) { return locale === 'en' ? 'start：' : '开始时间：'; };
var endText = function (locale) { return locale === 'en' ? 'end：' : '结束时间：'; };

var Calendar = require('rc-calendar').default ? require('rc-calendar').default : require('rc-calendar');
var CalendarLocaleZh = require('rc-calendar/lib/locale/zh_CN').default ? require('rc-calendar/lib/locale/zh_CN').default : require('rc-calendar/lib/locale/zh_CN');
var CalendarLocaleEn = require('rc-calendar/lib/locale/en_US').default ? require('rc-calendar/lib/locale/en_US').default : require('rc-calendar/lib/locale/en_US');
var DatePicker = function (_a) {
    var value = _a.value, onChange = _a.onChange, className = _a.className, disabledDate = _a.disabledDate, calendarClassName = _a.calendarClassName, locale = _a.locale, type = _a.type;
    return (React__default.createElement("div", { className: className || '' },
        type && (React__default.createElement(HeaderLabel, { locale: locale, type: type, value: value.format('YYYY/MM/DD') })),
        React__default.createElement(Calendar, { prefixCls: 'ant-calendar', showDateInput: false, showToday: false, locale: getCalendarLocale(locale || 'zh'), value: value, onChange: onChange, disabledDate: disabledDate || disabledDate, className: calendarClassName || '' })));
};
var getCalendarLocale = function (locale) {
    return (locale === 'zh' || locale === 'zh-cn' || locale === 'cn') ? CalendarLocaleZh : CalendarLocaleEn;
};

var Label = function (props) { return (React__default.createElement("button", { className: "gio-datepicker-label " + (props.className || '') + " " + (props.focus ? 'focus' : ''), onClick: props.onClick, type: 'button' },
    React__default.createElement(Icon, { className: 'icon calendar', name: 'gicon-calendar', fill: '#7F7583' }),
    props.label && (React__default.createElement("span", { className: 'text', title: props.label }, props.label)),
    React__default.createElement(Icon, { className: "icon arrow_down " + (props.focus ? 'focus' : ''), name: 'gicon-arrow-down', fill: '#666' }))); };

var DatePickerDecorator = function (options) {
    return function (Component$1) { var _a; return _a = /** @class */ (function (_super) {
            __extends(HOCDatePicker, _super);
            function HOCDatePicker(props) {
                var _this = _super.call(this, props) || this;
                _this.handleClick = function () {
                    _this.setState(function (prevState) { return ({ visible: !prevState.visible }); });
                };
                _this.hide = function () {
                    _this.setState(function () { return ({ visible: false }); });
                };
                _this.handleVisibleChange = function (visible) {
                    if (visible !== _this.state.visible) {
                        _this.setState(function () { return ({ visible: visible }); });
                    }
                };
                _this.handleChange = function (value) {
                    var _a = _this.props, onChange = _a.onChange, format = _a.format;
                    onChange(value.format(format));
                    if (_this.state.value.date() !== value.date()) {
                        _this.hide();
                    }
                };
                var value = moment().startOf('day');
                if ('value' in props && value) {
                    value = moment(props.value, props.format).startOf('day');
                }
                _this.state = {
                    visible: false,
                    value: value
                };
                return _this;
            }
            HOCDatePicker.prototype.componentWillReceiveProps = function (nextProps) {
                if ('value' in nextProps) {
                    this.setState(function (prevState) { return (__assign({}, prevState, { value: nextProps.value ? moment(nextProps.value, nextProps.format).startOf('day') : moment().startOf('day') })); });
                }
            };
            HOCDatePicker.prototype.render = function () {
                return (createElement(Component$1, { content: this.renderContent(), visible: this.state.visible, onVisibleChange: this.handleVisibleChange, overlayType: this.props.overlayType }, this.renderLable()));
            };
            HOCDatePicker.prototype.renderContent = function () {
                return (createElement(DatePicker, { onChange: this.handleChange, value: this.props.value ? moment(this.props.value, this.props.format).startOf('day') : moment(), calendarClassName: 'gio-datepicker-calendar', locale: this.props.locale, disabledDate: this.props.disabledDate }));
            };
            HOCDatePicker.prototype.renderLable = function () {
                if (this.props.labelComponent) {
                    return this.props.labelComponent({
                        label: this.props.value || '请选择',
                        onClick: this.handleClick,
                        focus: this.state.visible
                    });
                }
                return Label({
                    label: this.props.value || '请选择',
                    onClick: this.handleClick,
                    className: this.props.className,
                    focus: this.state.visible
                });
            };
            return HOCDatePicker;
        }(Component)),
        _a.defaultProps = {
            format: 'YYYY/MM/DD',
            locale: 'zh'
        },
        _a.displayName = "HOCDatePicker-" + (Component$1.displayName || 'Component'),
        _a; };
};

var OverlayType = /** @class */ (function (_super) {
    __extends(OverlayType, _super);
    function OverlayType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OverlayType.prototype.render = function () {
        if (this.props.overlayType === 'popover') {
            return (React__default.createElement(Popover, { content: this.props.content, visible: this.props.visible, onVisibleChange: this.props.onVisibleChange, trigger: 'click', placement: this.props.placement, getPopupContainer: this.props.getPopupContainer }, this.props.children));
        }
        return (React__default.createElement(Dropdown, { overlay: this.props.content, visible: this.props.visible, onVisibleChange: this.props.onVisibleChange, trigger: ['click'], overlayClassName: 'gio-datepicker-dropdown-overlay', placement: this.props.placement, getPopupContainer: this.props.getPopupContainer }, this.props.children));
    };
    return OverlayType;
}(React__default.Component));

var map = Object.freeze({
    today: {
        range: 'day:1,0',
        cn: '今天',
        en: 'Today',
        tooltip: ''
    },
    yesterday: {
        range: 'day:2,1',
        cn: '昨天',
        en: 'Yesterday',
        tooltip: ''
    },
    this_week: {
        range: 'week:1,0',
        cn: '本周',
        en: 'This Week',
        tooltip: ''
    },
    last_week: {
        range: 'week:prev',
        cn: '上周',
        en: 'Last Week',
        tooltip: ''
    },
    this_month: {
        range: 'month:1,0',
        cn: '本月',
        en: 'This Month',
        tooltip: ''
    },
    last_month: {
        range: 'month:prev',
        cn: '上月',
        en: 'Last Month',
        tooltip: ''
    },
    this_year: {
        range: 'year:1,0',
        cn: '今年',
        en: 'This Year',
        tooltip: ''
    },
    last_year: {
        range: 'year:prev',
        cn: '去年',
        en: 'Last Year',
        tooltip: ''
    },
    last_7_day: {
        range: 'day:8,1',
        cn: '过去7天',
        en: 'Last 7 Days',
        tooltip: ''
    },
    last_14_day: {
        range: 'day:15,1',
        cn: '过去14天',
        en: 'Last 14 Days',
        tooltip: ''
    },
    last_30_day: {
        range: 'day:31,1',
        cn: '过去30天',
        en: 'Last 30 Days',
        tooltip: ''
    },
    last_90_day: {
        range: 'day:91,1',
        cn: '过去90天',
        en: 'Last 90 Days',
        tooltip: ''
    },
    last_180_day: {
        range: 'day:181,1',
        cn: '过去180天',
        en: 'Last 180 Days',
        tooltip: ''
    },
    last_365_day: {
        range: 'day:366,1',
        cn: '过去365天',
        en: 'Last 365 Days',
        tooltip: ''
    },
    since: {
        range: 'since',
        cn: '开始时间至今',
        en: 'up to now',
        tooltip: '从您选择的开始时间起，持续统计数据'
    }
});
/**
 * 今天
 */
var todayRange = map.today.range;
/**
 * 获取全部range对应的value
 * @returns { object }
 */
var getAllRanges = function () {
    var ranges = {};
    var keys = Object.keys(map);
    keys.forEach(function (key) {
        ranges[key] = map[key].range;
    });
    return ranges;
};
/**
 * 根据range获取key
 * @param { string }
 * @return { string }
 */
var getKeyFromRange = function (range) {
    if (!range) {
        return '';
    }
    var keys = Object.keys(map);
    var result = '';
    keys.forEach(function (key) {
        if (map[key].range === range) {
            result = key;
        }
    });
    return result;
};
/**
 * 根据range获取tooltip
 * @param {string}
 * @returns { string }
 */
var getTooltipFromKey = function (key) {
    return map[key] ? map[key].tooltip : '';
};
/**
 * 获取range的value
 * @param { string }
 * @returns { string }
 */
var getRangeFromKey = function (key) { return map[key] ? map[key].range || todayRange : todayRange; };
/**
 * 格式化range
 * @param { string } range
 * @returns { object }
 * @returns { string } type
 * @returns { number[] } dateRange
 */
var formatRange = function (range) {
    if (!/^[a-zA-Z]+\:((\d+\,\d+)|((prev)?))/.test(range)) {
        return;
    }
    var rangeArray = range.split(':');
    var type = rangeArray[0];
    var dateRange = [];
    if (rangeArray[1] === 'prev') {
        dateRange = [2, 1];
    }
    else {
        dateRange = rangeArray[1].split(',').map(function (v) { return parseInt(v, 10); });
    }
    return { type: type, dateRange: dateRange };
};
/**
 * 获取range的Moment
 * @param { string }
 * @returns { Moment[] }
 */
var getMomentsFromRange = function (range) {
    var formatedRange = formatRange(range);
    if (!formatedRange) {
        return [];
    }
    var dateRange = formatedRange.dateRange;
    switch (formatedRange.type) {
        case 'day': {
            return [
                dateRange[0] === 1 ?
                    moment().startOf('day') :
                    moment().startOf('day').subtract(dateRange[0] - 1, 'days'),
                dateRange[1] === 0 ?
                    moment().endOf('day') :
                    moment().endOf('day').subtract(dateRange[1], 'days')
            ];
        }
        case 'week': {
            return [
                dateRange[0] === 1 ?
                    moment().startOf('week') :
                    moment().startOf('week').subtract(dateRange[0] - 1, 'weeks'),
                dateRange[1] === 0 ?
                    moment().endOf('day') :
                    moment().endOf('week').subtract(dateRange[0] - 1, 'weeks').endOf('week')
            ];
        }
        case 'month': {
            return [
                dateRange[0] === 1 ?
                    moment().startOf('month') :
                    moment().startOf('month').subtract(dateRange[0] - 1, 'months'),
                dateRange[1] === 0 ?
                    moment().endOf('day') :
                    moment().endOf('month').subtract(dateRange[0] - 1, 'months').endOf('month')
            ];
        }
        case 'year': {
            return [
                dateRange[0] === 1 ?
                    moment().startOf('year') :
                    moment().startOf('year').subtract(dateRange[0] - 1, 'years'),
                dateRange[1] === 0 ?
                    moment().endOf('day') :
                    moment().endOf('year').subtract(dateRange[0] - 1, 'years').endOf('year')
            ];
        }
        default:
            return [];
    }
};
/**
 * 根据iclude获取ranges
 * @param { string[] }
 * @returns { string[] }
 */
var getIcludeRanges = function (includes) {
    var ranges = {};
    includes.forEach(function (key) {
        var rangeInfo = map[key];
        if (rangeInfo) {
            ranges[key] = rangeInfo.range;
        }
    });
    return ranges;
};
/**
 * 通过range获取range
 * @param { string }
 * @returns { string }
 */
// const getRangeFromValue = (range: string): string => {
//     const ranges = getAllRanges();
//     const keys = Object.keys(ranges);
//     return keys.find((key) => (range === ranges[key])) || ''
// }
/**
 * 国际化
 * @param { string }
 * @returns { string }
 */
var i18nRange = function (range, locale) {
    if (/^since\:\d+/.test(range)) {
        var date = moment(parseInt(range.replace('since:', ''), 10)).format('YYYY/MM/DD');
        if (locale === 'en') {
            return "Since " + date;
        }
        return date + " - \u81F3\u4ECA";
    }
    if (/^abs\:\d+\,\d+/.test(range)) {
        var ranges = range.replace('abs:', '').split(',').map(function (v) { return parseInt(v, 10); });
        return moment(ranges[0]).format('YYYY/MM/DD') + " - " + moment(ranges[1]).format('YYYY/MM/DD');
    }
    return getText(getKeyFromRange(range), locale) || range;
};
var getText = function (key, locale) {
    if (locale === void 0) { locale = 'cn'; }
    if (!map[key]) {
        return '';
    }
    return locale === 'cn' ? map[key].cn : map[key].en;
};

var RangeDatePicker = /** @class */ (function (_super) {
    __extends(RangeDatePicker, _super);
    // React16版
    // public static getDerivedStateFromProps(nextProps: RangeDatePickerProps, prevState: RangeDatePickerState) {
    //     if (!('startTime' in nextProps) || !('endTime' in nextProps)) {
    //         return null
    //     }
    //     if (nextProps.startTime.isSame(this.state.start) && nextProps.endTime.isSame(this.state.end)) {
    //         return null
    //     }
    //     return {
    //         start: 'startTime' in nextProps ? nextProps.startTime : prevState.start,
    //         end: 'endTime' in nextProps ? nextProps.endTime : prevState.end
    //     }
    // }
    function RangeDatePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.handleSelectStartTime = function (start) {
            var _a = _this.props, minDate = _a.minDate, maxDate = _a.maxDate;
            var startTime = start.clone();
            var endTime = _this.state.end.clone();
            if (minDate && start.isBefore(minDate)) {
                startTime = minDate.clone().startOf('day');
            }
            else if (maxDate && start.isAfter(maxDate)) {
                startTime = maxDate.clone().startOf('day');
            }
            var startMoment = moment.min(startTime, _this.state.end).clone().startOf('day');
            var endMoment = moment.max(startTime, _this.state.end).clone().endOf('day');
            if ('startTime' in _this.props && 'endTime' in _this.props) {
                var onChange = _this.props.onChange;
                onChange(startMoment, endMoment);
            }
            else {
                _this.setState(function () { return ({
                    start: startMoment,
                    end: endMoment
                }); });
            }
        };
        _this.handleSelectEndTime = function (end) {
            var _a = _this.props, minDate = _a.minDate, maxDate = _a.maxDate;
            var startTime = _this.state.start.clone();
            var endTime = end.clone();
            if (maxDate && end.isAfter(maxDate)) {
                endTime = _this.props.maxDate.clone().endOf('day');
            }
            else if (minDate && end.isBefore(minDate)) {
                endTime = minDate.clone().endOf('day');
            }
            var startMoment = moment.min(_this.state.start, endTime).clone().startOf('day');
            var endMoment = moment.max(_this.state.start, endTime).clone().endOf('day');
            if ('startTime' in _this.props && 'endTime' in _this.props) {
                var onChange = _this.props.onChange;
                onChange(startMoment, endMoment);
            }
            else {
                _this.setState(function () { return ({
                    start: startMoment,
                    end: endMoment
                }); });
            }
        };
        _this.disabledDate = function (current) {
            var _a = _this.props, minDate = _a.minDate, maxDate = _a.maxDate;
            var isDisabledDate = false;
            if (minDate && !maxDate) {
                isDisabledDate = moment(current).isBefore(minDate);
            }
            if (!minDate && maxDate) {
                isDisabledDate = moment(maxDate).isBefore(current);
            }
            if (minDate && maxDate) {
                isDisabledDate = moment(maxDate).isBefore(current) || moment(current).isBefore(minDate);
            }
            return isDisabledDate;
        };
        var start = moment().startOf('day');
        var end = moment().endOf('day');
        if ('startTime' in props && props.startTime) {
            start = props.startTime;
        }
        if ('endTime' in props && props.endTime) {
            end = props.endTime;
        }
        _this.state = {
            start: start,
            end: end
        };
        return _this;
    }
    RangeDatePicker.prototype.componentWillReceiveProps = function (nextProps) {
        var nextStartTime = nextProps.startTime;
        var nextEndTime = nextProps.endTime;
        if (!('startTime' in nextProps) || !('endTime' in nextProps)) {
            return;
        }
        if (nextStartTime &&
            nextEndTime &&
            nextStartTime.isSame(this.state.start) &&
            nextEndTime.isSame(this.state.end)) {
            return;
        }
        this.setState(function () { return ({
            start: nextProps.startTime,
            end: nextProps.endTime
        }); });
    };
    RangeDatePicker.prototype.render = function () {
        var _a = this.props, minDate = _a.minDate, maxDate = _a.maxDate, locale = _a.locale;
        var _b = this.state, start = _b.start, end = _b.end;
        var isSameDate = start.isSame(end);
        return (React__default.createElement("div", { className: 'gio-datepicker-range-date' },
            React__default.createElement(DatePicker, { className: 'gio-datepicker-range-date-child', value: minDate && moment(start).isBefore(minDate) && !isSameDate ? minDate : start, onChange: this.handleSelectStartTime, disabledDate: this.disabledDate, locale: locale, type: 'start' }),
            React__default.createElement(DatePicker, { className: 'gio-datepicker-range-date-child', value: maxDate && moment(maxDate).isBefore(end) && !isSameDate ? maxDate : end, onChange: this.handleSelectEndTime, disabledDate: this.disabledDate, locale: locale, type: 'end' })));
    };
    return RangeDatePicker;
}(React__default.PureComponent));

var Range = /** @class */ (function (_super) {
    __extends(Range, _super);
    function Range() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function () {
            var _a = _this.props, label = _a.label, onClick = _a.onClick, value = _a.value, active = _a.active;
            if (active) {
                return;
            }
            onClick(value);
        };
        return _this;
    }
    Range.prototype.render = function () {
        var _a = this.props, label = _a.label, value = _a.value, active = _a.active;
        var tooltip = getTooltipFromKey(label);
        return (React__default.createElement("li", { className: "range " + (active && 'active'), onClick: this.handleClick }, tooltip ? this.renderTooltip(tooltip) : this.renderLabel()));
    };
    Range.prototype.renderTooltip = function (tooltip) {
        var value = this.props.value;
        return (React__default.createElement(Tooltip, { title: tooltip, placement: 'bottom' }, this.renderLabel()));
    };
    Range.prototype.renderLabel = function () {
        var _a = this.props, label = _a.label, locale = _a.locale;
        var key = getKeyFromRange(label);
        var isSince = key === 'since';
        return isSince ? this.renderSinceLabel() : getText(label, locale === 'en' ? 'en' : 'cn');
    };
    Range.prototype.renderSinceLabel = function () {
        var locale = this.props.locale;
        return (React__default.createElement("span", { className: 'since' }, i18nRange('since', locale === 'en' ? 'en' : 'cn')));
    };
    return Range;
}(React__default.PureComponent));

var defaultRanges = getAllRanges();
var ShortcutButtons = /** @class */ (function (_super) {
    __extends(ShortcutButtons, _super);
    function ShortcutButtons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShortcutButtons.prototype.render = function () {
        var includes = this.props.includes;
        return (React__default.createElement("ul", { className: 'gio-datepicker-shortcut-buttons' },
            this.renderDefaultRanges(),
            this.renderIcludeRanges()));
    };
    ShortcutButtons.prototype.renderDefaultRanges = function () {
        var _this = this;
        var _a = this.props, includes = _a.includes, onClick = _a.onClick, range = _a.range, locale = _a.locale;
        if (Array.isArray(includes)) {
            return null;
        }
        var labels = Object.keys(defaultRanges);
        return labels.map(function (label) {
            var value = defaultRanges[label];
            var active = _this.isActiveRange(value);
            return (React__default.createElement(Range, { key: label, label: label, value: value, onClick: onClick, active: active, locale: locale }));
        });
    };
    ShortcutButtons.prototype.renderIcludeRanges = function () {
        var _this = this;
        var _a = this.props, includes = _a.includes, onClick = _a.onClick, locale = _a.locale;
        if (!Array.isArray(includes) || includes.length === 0) {
            return null;
        }
        var includeRanges = getIcludeRanges(includes);
        var labels = Object.keys(includeRanges);
        return labels.map(function (label) {
            var value = includeRanges[label];
            var active = _this.isActiveRange(value);
            return (React__default.createElement(Range, { key: label, label: label, value: value, onClick: onClick, active: active, locale: locale }));
        });
    };
    ShortcutButtons.prototype.isActiveRange = function (value) {
        var active = false;
        var range = this.props.range;
        if (range === value) {
            active = true;
        }
        if (/since/.test(value) && /since/.test(range)) {
            active = true;
        }
        return active;
    };
    return ShortcutButtons;
}(React__default.Component));

var defaultValue = getRangeFromKey('last_7_day');
var DateRangeContent = /** @class */ (function (_super) {
    __extends(DateRangeContent, _super);
    function DateRangeContent(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (start, end) {
            _this.setState(function () { return ({
                value: '',
                start: start,
                end: end
            }); });
        };
        _this.handleRangeClick = function (value) {
            var ranges = getRangeFromPropsValue({
                value: value,
                startTime: _this.state.start
            });
            _this.setState(function () { return ({
                value: /since/.test(value) ? value + ":" + ranges[0].valueOf() : value,
                start: ranges[0],
                end: ranges[1]
            }); }, function () { return _this.handleOk(); });
        };
        _this.handleOk = function () {
            if (!_this.props.onOk) {
                return;
            }
            var onOk = _this.props.onOk;
            var _a = _this.state, start = _a.start, end = _a.end, value = _a.value;
            if (value) {
                onOk(value, start, end);
            }
            else {
                onOk("abs:" + start.valueOf() + "," + end.valueOf(), start, end);
            }
        };
        var ranges = getRangeFromPropsValue({
            value: props.value,
            defaultValue: defaultValue
        });
        _this.state = {
            value: 'value' in props ? props.value : defaultValue,
            start: ranges[0],
            end: ranges[1]
        };
        return _this;
    }
    DateRangeContent.prototype.componentWillReceiveProps = function (nextProps) {
        if (!('value' in nextProps) && nextProps.value === this.props.value) {
            return;
        }
        var ranges = getRangeFromPropsValue({
            value: nextProps.value,
            defaultValue: defaultValue
        });
        var nextState = {
            value: nextProps.value,
            start: ranges[0],
            end: ranges[1]
        };
        this.setState(function () { return nextState; });
    };
    DateRangeContent.prototype.render = function () {
        var _a = this.state, start = _a.start, end = _a.end;
        return (React__default.createElement("div", { className: 'gio-datepicker-range-content' },
            React__default.createElement(RangeDatePicker, { startTime: start, endTime: end, onChange: this.handleChange, minDate: this.props.minDate, maxDate: this.props.maxDate, locale: this.props.locale }),
            React__default.createElement("div", { className: 'operate' },
                React__default.createElement(ShortcutButtons, { range: this.state.value, onClick: this.handleRangeClick, includes: this.props.shortcutIncludes, locale: this.props.locale }),
                React__default.createElement("div", { className: 'button' },
                    React__default.createElement(Button, { type: 'primary', onClick: this.handleOk }, this.props.locale === 'en' ? 'confirm' : '确定')))));
    };
    return DateRangeContent;
}(React__default.Component));
var getRangeFromPropsValue = function (props) {
    var value = props.value, defaultValue = props.defaultValue, startTime = props.startTime;
    if (!value) {
        return getMomentsFromRange(defaultValue);
    }
    if (/abs/.test(value)) {
        return getABSRange(value);
    }
    if (/^since\:\d+/.test(value)) {
        return getSinceRangeFromNumber(parseInt(value.replace('since:', ''), 10));
    }
    if (value === 'since') {
        return getSinceRangeFromMoment(startTime || moment().startOf('day'));
    }
    return getMomentsFromRange(value);
};
var getABSRange = function (value) {
    var absRangeTimeStamp = value.replace('abs:', '').split(',').map(function (t) { return parseInt(t, 10); });
    return [
        moment(absRangeTimeStamp[0]).startOf('day'),
        moment(absRangeTimeStamp[1]).startOf('day')
    ];
};
var getSinceRangeFromMoment = function (startTime) {
    return [
        startTime,
        moment().startOf('day')
    ];
};
var getSinceRangeFromNumber = function (startTime) {
    return [
        moment(startTime),
        moment().startOf('day')
    ];
};

var RangeDecorator = function (options) { return function (Component) { var _a; return _a = /** @class */ (function (_super) {
        __extends(HOCRange, _super);
        function HOCRange(props) {
            var _this = _super.call(this, props) || this;
            _this.handleClick = function () {
                if (_this.props.disabled) {
                    return;
                }
                _this.setState(function (prevState) { return ({ visible: !prevState.visible }); });
            };
            _this.hide = function () {
                _this.setState(function () { return ({ visible: false }); });
            };
            _this.handleVisibleChange = function (visible) {
                if (_this.props.disabled) {
                    return;
                }
                if (visible !== _this.state.visible) {
                    _this.setState(function () { return ({ visible: visible }); });
                }
            };
            _this.handleOk = function (value, start, end) {
                var onChange = _this.props.onChange;
                onChange(value, start, end);
                _this.hide();
            };
            _this.state = {
                visible: false
            };
            return _this;
        }
        HOCRange.prototype.render = function () {
            return (React__default.createElement(Component, { content: this.renderContent(), visible: this.state.visible, onVisibleChange: this.handleVisibleChange, overlayType: this.props.overlayType, getPopupContainer: this.props.getPopupContainer, placement: this.props.overlayPlacement }, this.renderLable()));
        };
        HOCRange.prototype.renderContent = function () {
            return (React__default.createElement(DateRangeContent, { onOk: this.handleOk, value: this.props.value, shortcutIncludes: this.props.shortcutIncludes, locale: this.props.locale, minDate: this.props.minDate, maxDate: this.props.maxDate }));
        };
        HOCRange.prototype.renderLable = function () {
            var label = this.getLabelText();
            if (this.props.labelComponent) {
                return this.props.labelComponent({
                    label: label,
                    onClick: this.handleClick
                });
            }
            return Label({
                label: label,
                onClick: this.handleClick,
                className: this.props.className,
                focus: this.state.visible
            });
        };
        HOCRange.prototype.getLabelText = function () {
            var _a = this.props, value = _a.value, placeholder = _a.placeholder;
            if (!value) {
                return placeholder;
            }
            var replacedValue = value.replace(/\s/, '');
            if (!(/(since)|(day)|(week)|(month)|(year)|(abs)/.test(replacedValue))) {
                return placeholder;
            }
            if (/since/.test(replacedValue)) {
                var date = moment(parseInt(replacedValue.replace(/since\:/, ''), 10)).format('YYYY-MM-DD');
                if (this.props.locale === 'en') {
                    return "Since " + date;
                }
                return date + " - \u81F3\u4ECA";
            }
            if (/abs:/.test(replacedValue)) {
                var ranges = this.formatValueToRangeTime(replacedValue);
                return ranges[0].format('YYYY/MM/DD') + " - " + ranges[1].format('YYYY/MM/DD');
            }
            return i18nRange(replacedValue, this.props.locale === 'en' ? 'en' : 'cn');
        };
        HOCRange.prototype.formatValueToRangeTime = function (value) {
            if (!(/abs/.test(value))) {
                var ranges = getMomentsFromRange(value);
                if (ranges.length === 0) {
                    return [
                        moment().startOf('day'),
                        moment().endOf('day')
                    ];
                }
                return ranges;
            }
            var absRangeTimeStamp = value.replace('abs:', '').split(',').map(function (t) { return parseInt(t, 10); });
            return [
                moment(absRangeTimeStamp[0]).startOf('day'),
                moment(absRangeTimeStamp[1]).endOf('day')
            ];
        };
        return HOCRange;
    }(React__default.Component)),
    _a.displayName = "HOCRange-" + (Component.displayName || 'Component'),
    _a.defaultProps = {
        onChange: function () { return ({}); },
        placeholder: '请选择',
        locale: 'zh',
        disabled: false
    },
    _a; }; };

var Range$1 = RangeDecorator()(OverlayType);

var DatePicker$1 = DatePickerDecorator()(OverlayType);
DatePicker$1.Range = Range$1;

export default DatePicker$1;
