import { b as __rest, _ as __assign } from '../common/chunk.js';
import React__default from 'react';
import { TimePicker as TimePicker$1 } from 'antd';
import 'antd/lib/time-picker/style/index.css';

var TimePicker = function (_a) {
    var _b = _a.placementIcon, placementIcon = _b === void 0 ? 'right' : _b, className = _a.className, other = __rest(_a, ["placementIcon", "className"]);
    return (React__default.createElement(TimePicker$1, __assign({ className: 'gio-timerPicker-icon' + placementIcon + " " + className }, other)));
};

export default TimePicker;
