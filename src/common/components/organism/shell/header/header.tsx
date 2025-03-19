import { Trans } from '@lingui/react';
import { ReactElement } from 'react';

import { TextInput } from 'src/common/components/atoms/text-input';

import { HeaderAccount } from './components/account-details';
import { headerWrapperStyle } from './header.style';
// import { useUser } from 'src/store/user';

export const Header = (): ReactElement=> {

  // const { user } = useUser();

  return <div className={headerWrapperStyle()}>
    <div className='max-w-11/12 w-full gap-20 flex justify-between mx-auto items-center' >
      <div className='flex gap-20 flex-1 items-center'>
        <div className='font-extrabold w-60 text-3xl'>Library System</div>
        <div className='flex-1 max-w-4xl '>
          <TextInput onChange={undefined}  wrapperClass='rounded-full' >
            <Trans id='components.shell.main-menu.search'>Search Book</Trans>
          </TextInput>
        </div>
      </div>
      <HeaderAccount />
    </div>
  </div>;
};
