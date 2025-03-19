import { matchRoutes, useLocation } from 'react-router';
import { ThemeColorMode } from 'src/common/constants/enum/theme';
import { defaultValue } from 'src/common/helpers/data';
import { LBSRouteHandle } from 'src/common/interfaces/router';
import { routes } from 'src/router';

export const useRouteProps = (): LBSRouteHandle => {
  const location = useLocation();
  const matches = matchRoutes(routes, location);

  let handle: Partial<LBSRouteHandle> = {};
  if (matches && matches.length > 0 ) {
    handle = matches[matches.length - 1]?.route.handle ?? {};
  }

  const { fullscreen, colorMode, authRequired, skipUserAuth, mainMenu } = handle;

  return {
    fullscreen: defaultValue<boolean>(fullscreen, false),
    colorMode: defaultValue<ThemeColorMode>(colorMode, ThemeColorMode.auto),
    authRequired: defaultValue(authRequired, false),
    skipUserAuth: defaultValue<boolean>(skipUserAuth, false),
    mainMenu: defaultValue<boolean>(mainMenu, true),
  };
};
