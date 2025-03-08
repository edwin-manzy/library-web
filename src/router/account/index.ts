import { lazy } from 'react';
import { LBSRouteObj } from 'src/common/interfaces/router';

export const accountSettingsRouter: LBSRouteObj[] = [
  {
    path: 'account',
    children: [
      {
        path: 'signin',
        Component: lazy(async () => {
          const { SignInPage } = await import('src/features/account/signin');
          return { default: SignInPage };
        })
      },
      {
        path: 'signup',
        Component: lazy(async () => {
          const { SignUpPage } = await import('src/features/account/signup');
          return { default: SignUpPage };
        })
      },
      {
        path: 'settings',
        Component: lazy(async () => {
          const { AccountSettingsPage } = await import('src/features/account/settings');
          return { default: AccountSettingsPage };
        })
      }
    ]
  }
];
