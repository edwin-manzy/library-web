import { ReactElement } from 'react';
import { Menu } from 'src/common/components/molecules/menu/menu';
import { librarianMenu } from 'src/common/constants/shell/menu/librarian';

export const MainMenu = (): ReactElement => {
  return <div className='h-full w-130' >
    <Menu items={librarianMenu}  />
  </div>;
};
