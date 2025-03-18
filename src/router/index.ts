import { createBrowserRouter } from 'react-router';

import { Shell } from 'src/common/components/organism/shell';
import { LBSRouteObj } from 'src/common/interfaces/router';

import { UserInitialize } from 'src/features/account';

import { accountSettingsRouter } from './account';

import { comingSoonRoutes } from './coming-soon';
import { dashboardRoutes } from './dashboard';
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
          ...dashboardRoutes,
          ...comingSoonRoutes,
          ...accountSettingsRouter,
          ...errorRoutes
        ]
      }
    ]
  }
];

export const router = createBrowserRouter(routes);
