import { lazy } from 'react';
import { LBSRouteObj } from 'src/common/interfaces/router';

export const dashboardRoutes: LBSRouteObj[] = [{
  path: '/',
  handle: {
    authRequired: true,
    fullscreen: false,
  },
  Component: lazy(async () => {
    const { HomePage } = await import('src/features/home');
    return { default: HomePage };
  }),
}];
