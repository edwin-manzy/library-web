import { ReactElement } from 'react';

import { Link, NavLink } from 'react-router';

import { MenuProps } from './menu.types';

export const Menu = ({ items, isNav = false, baseUrl }: MenuProps): ReactElement | null => {

  if (items === undefined) {
    return null;
  }

  if (!Array.isArray(items)) {
    const { label, children, link } = items;
    const Comp = isNav ? NavLink : Link;
    const lnk = baseUrl ? baseUrl + '/' + link : link;
    return <li>
      <Comp to={lnk}  >{ label }</Comp>
      <Menu baseUrl={baseUrl ? lnk : undefined} isNav={isNav} items={children} />
    </li>;
  }

  return <ul >
    {
      items.map((menu, index) => {
        if (Array.isArray(menu)) {
          return <li key={index} ><Menu baseUrl={baseUrl}  isNav={isNav} items={menu} /></li>;
        }
        return <Menu baseUrl={baseUrl} isNav={isNav} items={menu} key={menu.label} />;
      })
    }
  </ul>;
};
