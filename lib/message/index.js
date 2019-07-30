import '../common/chunk.js';
import { createElement } from 'react';
import 'classnames';
import 'lodash';
import '../common/chunk2.js';
import Icon from '../icon/index.js';
import notification from 'rc-notification';

var successIcon = "data:image/png;base64,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";

var failureIcon = "data:image/png;base64,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";

var DURATION = {
    SUCCESS: 1,
    ERROR: 2,
    HASACTION: 3
};
// 由于 gatsby 与 frontend-app 的 webpack 版本不兼容，在 gatsby 升级之前暂时采用这种写法
var newInstance = notification.__esModule ? notification.default.newInstance : notification.newInstance;
var notifier = null;
newInstance({
    prefixCls: 'gio-message',
    transitionName: 'move-up'
}, function (n) { return notifier = n; });
var notice = function (content, type, customDuration, shouldRenderCloseBtn) {
    if (shouldRenderCloseBtn === void 0) { shouldRenderCloseBtn = false; }
    var key = Date.now();
    var duration = DURATION[type.toUpperCase()];
    var shouldRenderCloseButton = shouldRenderCloseBtn;
    var result = [];
    for (var i = 0; i < content.length; i++) {
        if (content[i] === '#') {
            result.push(i);
        }
    }
    var hasAction = result.length === 2;
    return new Promise(function (resolve, reject) {
        var close = function () {
            notifier.removeNotice(key);
            resolve('close');
        };
        var action = function () {
            notifier.removeNotice(key);
            resolve('action');
        };
        var actionContent = null;
        if (hasAction) {
            duration = DURATION.HASACTION;
            shouldRenderCloseButton = true;
            actionContent = (createElement("span", null,
                createElement("span", null, content.substring(0, result[0])),
                createElement("a", { className: 'gio-message-action', onClick: action }, content.substring(result[0] + 1, result[1])),
                createElement("span", null, content.substring(result[1] + 1))));
        }
        if (customDuration !== undefined) {
            duration = customDuration;
        }
        notifier.notice({
            key: key,
            closable: shouldRenderCloseButton,
            onClose: close,
            duration: duration,
            content: (createElement("div", null,
                createElement("span", { className: 'gio-message-notice-icon success' },
                    createElement("img", { src: type === 'success' ? successIcon : failureIcon, alt: type })),
                hasAction ? actionContent : content,
                shouldRenderCloseButton ?
                    createElement("span", { className: 'gio-message-notice-close', onClick: close },
                        createElement(Icon, { name: 'gicon-close', size: 'small' }))
                    :
                        null))
        });
    });
};
var success = function (content, duration, shouldRenderCloseBtn) { return notice(content, 'success', duration, shouldRenderCloseBtn); };
var error = function (content, duration, shouldRenderCloseBtn) { return notice(content, 'error', duration, shouldRenderCloseBtn); };
var destory = function () {
    if (notifier) {
        notifier.destroy();
    }
};
var message = { success: success, error: error, destory: destory };

export default message;
