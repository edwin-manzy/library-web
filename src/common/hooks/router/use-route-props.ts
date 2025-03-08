import { matchRoutes, useLocation } from 'react-router';
import { ThemeColorMode } from 'src/common/constants/enum/theme';
import { LBSRouteHandle } from 'src/common/interfaces/router';
import { routes } from 'src/router';

export const useRouteProps = (): LBSRouteHandle => {
  const location = useLocation();
  const matches = matchRoutes(routes, location);

  const route = matches && matches[0].route.handle;

  return {
    fullscreen: route?.fullscreen || false,
    colorMode: route?.colorMode || ThemeColorMode.auto,
    authRequired: route?.authRequired || false,
  };
};
