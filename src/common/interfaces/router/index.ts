import { NonIndexRouteObject } from 'react-router';
import { ThemeColorMode } from 'src/common/constants/enum/theme';

export interface LBSRouteHandle {
  fullscreen: boolean,
  colorMode: ThemeColorMode,
  authRequired: boolean,
  skipUserAuth: boolean,
}


export interface LBSRouteObj extends NonIndexRouteObject {
  handle?: Partial<LBSRouteHandle>
}
