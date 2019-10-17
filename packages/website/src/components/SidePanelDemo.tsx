import React, { useState } from 'react'
import SidePanel from '@gio-design/components/lib/side-panel';

const SidePanelDemo: React.FC = (props: any) => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Toggle</button>
      <SidePanel
        {...props}
        close={() => setVisible(false)}
        visible={visible}
      />
    </div>
  )
}

export default SidePanelDemo;