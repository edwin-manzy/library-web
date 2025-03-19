import { ReactNode } from 'react';
import { Outlet } from 'react-router';
import { useRouteProps } from 'src/common/hooks/router/use-route-props';

import { Header } from './header';
import { MainMenu } from './main-menu';

export const Shell = (): ReactNode | undefined => {
  const { fullscreen } = useRouteProps();
  if (fullscreen) {
    return <Outlet />;
  }

  return <div className='flex flex-col h-full w-full'>
    <Header />
    <div className='flex w-full flex-1' >
      <MainMenu />
      <div className='flex-1 p-10 bg-white rounded-l-4xl'>
        <Outlet />
      </div>
    </div>
  </div>;
};
