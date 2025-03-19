import { ReactElement } from 'react';

import { MenuProps } from './menu.types';

export const Menu = ({ items }: MenuProps): ReactElement | null => {

  if (items === undefined) {
    return null;
  }

  if (!Array.isArray(items)) {
    const { label, children } = items;
    return <li>
      { label }
      <Menu items={children} />
    </li>;
  }

  return <ul >
    {
      items.map((menu, index) => {
        if (Array.isArray(menu)) {
          return <li key={index} ><Menu items={menu} /></li>;
        }
        return <Menu items={menu} key={menu.label} />;
      })
    }
  </ul>;
};
