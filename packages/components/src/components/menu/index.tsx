import React from 'react';
import { Menu as AntMenu } from 'antd'
import { MenuProps } from 'antd/lib/menu'
import 'antd/lib/menu/style/index.css';

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
