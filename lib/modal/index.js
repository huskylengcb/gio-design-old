import { b as __rest, _ as __assign } from '../common/chunk.js';
import React__default from 'react';
import { Modal as Modal$1 } from 'antd';
import classnames from 'classnames';
import 'antd/lib/button/style/index.less';
import 'antd/lib/tooltip/style/index.less';
import { noop } from 'lodash';
import Button from '../button/index.js';
import '../common/chunk2.js';
import Icon from '../icon/index.js';
import 'antd/lib/modal/style/index.css';

var Modal = function (_a) {
    var _b;
    var overflowY = _a.overflowY, minWidth = _a.minWidth, onBack = _a.onBack, backable = _a.backable, okButtonClassName = _a.okButtonClassName, _c = _a.style, style = _c === void 0 ? {} : _c, props = __rest(_a, ["overflowY", "minWidth", "onBack", "backable", "okButtonClassName", "style"]);
    var locale = props.locale;
    var footer = (React__default.createElement("div", { className: 'gio-modal-footer' },
        props.showCancel && React__default.createElement(Button, { size: props.size, type: props.cancelButtonType || 'subtle', onClick: props.onCancel }, props.cancelText ? props.cancelText : (locale === 'en' ? 'Cancel' : '取消')),
        React__default.createElement(Button, { size: props.size, type: props.okButtonType || 'secondary', loading: props.confirmLoading, disabled: props.disableOk ? true : false, onClick: props.onOk, className: okButtonClassName }, props.okText ? props.okText : (locale === 'en' ? 'Confirm' : '确定'))));
    var className = classnames('gio-modal', props.className, (_b = {},
        _b['gio-modal--overflow-y-scroll'] = overflowY === 'scroll',
        _b));
    return (React__default.createElement(Modal$1, __assign({}, props, { footer: props.footer !== undefined ? props.footer : footer, className: className, style: __assign({ minWidth: minWidth }, style) }),
        React__default.createElement("div", { className: 'gio-modal__step-container' },
            backable && React__default.createElement("div", { className: 'gio-modal__step-back' },
                React__default.createElement(Icon, { name: 'gicon-arrow-left', onClick: onBack })),
            React__default.createElement("div", { className: 'gio-modal__step-body' }, props.children))));
};
Modal.defaultProps = {
    visible: false,
    closable: true,
    className: '',
    title: '',
    okText: '',
    cancelText: '',
    disableOk: false,
    showCancel: true,
    onCancel: noop,
    onOk: noop,
    footer: undefined,
    confirmLoading: false,
    overflowY: 'visible'
};

export default Modal;
