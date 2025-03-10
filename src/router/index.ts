import { createBrowserRouter } from 'react-router';
import { comingSoonRoutes } from './coming-soon';
import { LBSRouteObj } from 'src/common/interfaces/router';
import { lazy } from 'react';
import { accountSettingsRouter } from './account';
import { Shell } from 'src/common/components/organism/shell';
import { UserInitialize } from 'src/features/account';
import { errorRoutes } from './error';

export const routes: LBSRouteObj[] = [
  {
    path: '',
    Component: UserInitialize,
    children: [
      {
        path: '',
        Component: Shell,
        children: [
          {
            path: '/',
            Component: lazy(async () => {
              const { HomePage } = await import('src/features/home');
              return { default: HomePage };
            })
          },
          ...comingSoonRoutes,
          ...accountSettingsRouter,
          ...errorRoutes
        ]
      }
    ]
  }
];

export const router = createBrowserRouter(routes);
