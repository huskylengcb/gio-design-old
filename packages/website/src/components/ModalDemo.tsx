import React, { useState } from 'react';
import Modal from '@gio-design/components/lib/modal';
import Button from '@gio-design/components/lib/button';

const ModalDemo: React.FC = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button type='primary' onClick={() => setVisible(!visible)}>Toggle</Button>
      <Modal
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <div>
          <h4>Modal Demo</h4>
        </div>
      </Modal>
    </div>
  )
}

export default ModalDemo;