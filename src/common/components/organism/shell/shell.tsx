import { ReactNode } from 'react';
import { useRouteProps } from 'src/common/hooks/router/use-route-props';
import { Header } from './header';
import { Outlet } from 'react-router';

export const Shell = (): ReactNode | undefined => {
  const { fullscreen } = useRouteProps();
  if (fullscreen) {
    return <Outlet />;
  }

  return <div className='flex flex-col h-full w-full'>
    <Header />
    <div className='w-full flex-1' >
      <Outlet />
    </div>
  </div>;
};
