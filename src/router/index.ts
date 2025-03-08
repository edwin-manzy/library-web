import { createBrowserRouter } from 'react-router';
import { comingSoonRoutes } from './coming-soon';
import { LBSRouteObj } from 'src/common/interfaces/router';
import { lazy } from 'react';
import { accountSettingsRouter } from './account';
import { Shell } from 'src/common/components/organism/shell';

export const routes: LBSRouteObj[] = [
  {
    path: '',
    Component: Shell,
    children: [
      {
        path: '*',
        Component: lazy(async() => {
          const { NotFoundPage } = await import('src/features/not-found');
          return { default: NotFoundPage };
        })
      },
      {
        path: '/',
        Component: lazy(async () => {
          const { HomePage } = await import('src/features/home');
          return { default: HomePage };
        })
      },
      ...comingSoonRoutes,
      ...accountSettingsRouter
    ]
  }
];

export const router = createBrowserRouter(routes);
