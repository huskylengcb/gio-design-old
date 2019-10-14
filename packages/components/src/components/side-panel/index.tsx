import React, { CSSProperties } from 'react';
import Modal from '../modal';

import './custom-style.less';

export interface Props {
  children: Element
  content: Element
  visible: boolean
  width?: number
  style?: CSSProperties
  close: () => void
  getContainer?: () => HTMLElement | null
};


const SidePanel = (props: Props) => {
  return (
    <React.Fragment>
      <Modal
        title='SidePanel'
        visible={props.visible}
        transitionName='rightIn'
        footer={null}
        closable={false}
        maskTransitionName='fade'
        mask={false}
        width={props.width}
        style={props.style}
        wrapClassName='gio-side-panel-wrapper'
        className='gio-side-panel'
        getContainer={props.getContainer}
      >
        <div>
          <span className='btn-close' onClick={() => props.close()}>X</span>
          {props.content}
        </div>
      </Modal>
    </React.Fragment>
  );
}
export default SidePanel;