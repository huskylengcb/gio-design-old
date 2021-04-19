import * as React from 'react';
import Checkbox from '../checkbox';
import './style/index.less';

interface TipProps {
  message: React.ReactNode;
  // 存在 localStorage 当中的 key
  name: string;
}

const Tip: React.FC<TipProps> = ({ 
  message,
  name
}) => {
  name = `gio-tip-old::${name}`
  const [vanish, setVanish] = React.useState(false);
  const [visible, setVisible] = React.useState(localStorage.getItem(name) !== 'true');

  const hide = React.useCallback(() => {
    if (vanish) {
      localStorage.setItem(name, 'true')
    }
    setVisible(false)
  }, [vanish])

  if (!visible) {
    return null
  }
  return (
    <div className='gio-tip-old'>
      <div className='gio-tip-old__message'>{message}</div>
      <div className='gio-tip-old__operate'>
        <Checkbox checked={vanish} className='gio-tip-old__checkbox' onChange={e => setVanish(e.target.checked)} />
        &nbsp;
        <span>不再提示</span>
        &nbsp;
        <a className='gio-tip-old__a' href='javascript:void(0)' onClick={hide}>
          我知道了
        </a>
      </div>
    </div>
  );
};

export default Tip;