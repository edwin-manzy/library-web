import { lazy } from 'react';
import { RouteObject } from 'react-router';

export const errorRoutes: RouteObject[] = [
  {
    path: '*',
    Component: lazy(async() => {
      const { NotFoundPage } = await import('src/features/errors/not-found');
      return { default: NotFoundPage };
    }),
    handle: {
      fullscreen: true,
    }
  },
  {
    path: 'error',
    children: [
      {
        path: 'system',
        Component: lazy(async() => {
          const { SystemErrorPage } = await import('src/features/errors/system-error');
          return { default: SystemErrorPage };
        }),
        handle: {
          fullscreen: true,
          skipUserAuth: true
        }
      }
    ]
  }
];
