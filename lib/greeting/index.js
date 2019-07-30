import '../common/chunk.js';
import React__default from 'react';
import 'classnames';
import 'lodash';
import '../common/chunk2.js';
import Icon from '../icon/index.js';
import notification from 'rc-notification';

// const notifier = notification.newInstance({
//   prefixCls: 'gio-greeting',
//   transitionName: 'move-up',
//   delay: 3000
// }, () => {});
var notifier = null;
notification.newInstance({
    prefixCls: 'gio-greeting',
    transitionName: 'move-up',
    delay: 3000
}, function (n) { return notifier = n; });
var notice = function (content) {
    var key = Date.now();
    return new Promise(function (resolve, reject) {
        var close = function () {
            notifier.removeNotice(key);
            resolve('close');
        };
        notifier.notice({
            key: key,
            onClose: close,
            content: (React__default.createElement("div", null,
                React__default.createElement("span", { className: 'gio-greeting-notice-icon' },
                    React__default.createElement(Icon, { name: 'gicon-coffee', size: 'large', fill: '#fff' })),
                React__default.createElement("span", { className: 'gio-greeting-tip' }, content)))
        });
    });
};
var info = function (content) { return notice(content); };
var destory = function () {
    if (notifier) {
        notifier.destroy();
    }
};
var greeting = { info: info, destory: destory };

export default greeting;
