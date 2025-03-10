import { ReactElement, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { SimpleLoader } from 'src/common/components/molecules/loaders';
import { useUser } from 'src/store/user';
import { getUser } from './user-initializer.api';
import { USER_ACTIONS } from 'src/common/constants/user';
import { useRouteProps } from 'src/common/hooks/router/use-route-props';

export const UserInitialize = (): ReactElement | null => {
  const { skipUserAuth } = useRouteProps();
  const navigate = useNavigate();
  const { loaded, dispatch } = useUser();

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

  if (loaded || skipUserAuth) {
    return <Outlet />;
  }

  return <SimpleLoader />;
};
