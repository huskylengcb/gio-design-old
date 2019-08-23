import React from 'react';
import './index.less';
// import cn from 'classnames';
import 'antd/lib/menu/style/index';
import { Menu as AntMenu } from 'antd'
import { MenuProps } from 'antd/lib/menu'

export interface GioMenuProps {
  [key: string]: any,
};

const { Divider, Item, ItemGroup, SubMenu } = AntMenu

export default class Menu extends React.Component<GioMenuProps & MenuProps, {}> {
  public static Divider: typeof Divider = Divider;
  public static Item: typeof Item = Item;
  public static SubMenu: typeof SubMenu = SubMenu;
  public static ItemGroup: typeof ItemGroup = ItemGroup;
  public render() {
    return (
      <AntMenu
        {...this.props}
      />
    );
  }
}
