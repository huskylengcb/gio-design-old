import React, { useState } from 'react';
import Modal from '../modal';

import './custom-style.less';

interface Props {
  children: Element
  visible: boolean
  close: () => void
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
        style={{
          top: 0,
          right: 0,
          position: 'fixed',
          height: '100%'
        }}
        wrapClassName='gio-side-panel-wrapper'
        className='gio-side-panel'
      >
        <div>
          <span className='btn-close' onClick={() => props.close()}>X</span>
        </div>
      </Modal>
    </React.Fragment>
  );
}
export default SidePanel;