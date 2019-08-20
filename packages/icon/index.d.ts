import React from 'react';

export interface IconProps {
  type: string,
  color?: string,
  size?: number | 'small' | 'normal' | 'middle' | 'large' | 'huge',
  style?: { [key: string]: string | number }
}

declare const Icon: React.SFC<IconProps>

export default Icon;