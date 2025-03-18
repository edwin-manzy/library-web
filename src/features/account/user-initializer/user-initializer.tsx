import { ReactElement, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { SimpleLoader } from 'src/common/components/molecules/loaders';
import { USER_ACTIONS } from 'src/common/constants/user';
import { useRouteProps } from 'src/common/hooks/router/use-route-props';
import { useUser } from 'src/store/user';

import { getUser } from './user-initializer.api';

export const UserInitialize = (): ReactElement | null => {
  const { skipUserAuth, authRequired } = useRouteProps();
  const navigate = useNavigate();
  const { loaded, dispatch, user } = useUser();

  useEffect(() => {
    if (skipUserAuth || loaded) {
      return;
    };

    getUser().then(data => {
      const { user } = data.unwrap();
      dispatch({
        action: USER_ACTIONS.SIGN_IN,
        payload: {
          user
        }
      });
    }).catch(() => {
      void navigate('/error/system');
    });
  }, [dispatch, navigate, skipUserAuth, loaded]);

  if (skipUserAuth) {
    return <Outlet />;
  }

  if (authRequired && loaded && !user) {
    void navigate('/account/signin');
    return <SimpleLoader />;
  }

  if (loaded) {
    return <Outlet />;
  }

  return <SimpleLoader />;
};
