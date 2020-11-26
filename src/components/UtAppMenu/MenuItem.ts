/* eslint-disable semi */
export interface MenuItem {
  title: string;
  type?: 'app';
  [x: string]: any;
}

export interface MenuNavItem extends MenuItem {
  items?: MenuNavItem[];
  selected?: boolean;
  disabled?: boolean;
  type: undefined;
}

export interface MenuAppItem extends MenuItem {
  type: 'app';
  color: string;
  icon: string;
}
