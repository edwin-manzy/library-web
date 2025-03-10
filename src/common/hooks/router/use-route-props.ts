import { matchRoutes, useLocation } from 'react-router';
import { ThemeColorMode } from 'src/common/constants/enum/theme';
import { LBSRouteHandle } from 'src/common/interfaces/router';
import { routes } from 'src/router';

export const useRouteProps = (): LBSRouteHandle => {
  const location = useLocation();
  const matches = matchRoutes(routes, location);

  let handle: Partial<LBSRouteHandle> = {};
  if (matches && matches.length > 0 ) {
    handle = matches[matches.length - 1]?.route.handle ?? {};
  }

  return {
    fullscreen: handle.fullscreen ?? false,
    colorMode: handle.colorMode ?? ThemeColorMode.auto,
    authRequired: handle.authRequired ?? false,
    skipUserAuth: handle.skipUserAuth ?? false,
  };
};
