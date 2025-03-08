import { ReactElement } from 'react';
import { Button } from 'src/common/components/atoms/button/button';
import { headerWrapperStyle } from './header.style';

export const Header = (): ReactElement=> {

  return <div className={headerWrapperStyle()}>
    <div className='max-w-11/12 w-full flex justify-between mx-auto' >
      <div>
        <div>Library System</div>
        <div>Search Bar</div>
      </div>
      <div className='flex gap-2'>
        <Button intent='link' to='/account/signup' >Sign up</Button>
        <Button className='rounded-full' to='/account/signin'  >Sign in</Button>
      </div>
    </div>
  </div>;
};
