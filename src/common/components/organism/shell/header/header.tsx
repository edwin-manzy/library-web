import { ReactElement } from 'react';

import { HeaderAccount } from './components/account-details';
import { headerWrapperStyle } from './header.style';
// import { useUser } from 'src/store/user';

export const Header = (): ReactElement=> {

  // const { user } = useUser();

  return <div className={headerWrapperStyle()}>
    <div className='max-w-11/12 w-full flex justify-between mx-auto' >
      <div>
        <div>Library System</div>
        <div>Search Bar</div>
      </div>
      <HeaderAccount />
    </div>
  </div>;
};
