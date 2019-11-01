import React, { useState } from 'react'
import SidePanel from '@gio-design/components/lib/side-panel';
import Button from '@gio-design/components/lib/button';

const SidePanelDemo: React.FC = (props: any) => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button type='primary' onClick={() => setVisible(!visible)}>Toggle</Button>
      <SidePanel
        {...props}
        close={() => setVisible(false)}
        visible={visible}
      />
    </div>
  )
}

export default SidePanelDemo;