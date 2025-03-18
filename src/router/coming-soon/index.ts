import { lazy } from 'react';

import type { LBSRouteObj } from 'src/common/interfaces/router';

const ComingSoonPage = lazy(async () => {
  const { ComingSoonPage } = await import('src/features/coming-soon/coming-soon');
  return { default:  ComingSoonPage };
});

export const comingSoonRoutes: LBSRouteObj[] = [{
  path: 'welcome',
  Component: ComingSoonPage
}];
