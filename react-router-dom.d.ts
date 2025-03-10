import { LBSRouteHandle } from 'src/common/interfaces/router';

declare module 'react-router-dom' {
  interface RouteObject {
    handle?: Partial<LBSRouteHandle>
  }
};
