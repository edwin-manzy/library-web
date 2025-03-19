import { Trans } from '@lingui/react';
import { ReactElement, useState } from 'react';
import { Button } from 'src/common/components/atoms/button';
import { TextInput } from 'src/common/components/atoms/text-input';

import { SimpleLoader } from 'src/common/components/molecules/loaders';
import { API_STATUS } from 'src/common/constants/api';

import { USER_ACTIONS, USER_ERRORS } from 'src/common/constants/user';
import { useUser } from 'src/store/user';

import { apiSignin } from './signin.api';


export const SigninForm = (): ReactElement => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState<undefined | string>();
  const { user, dispatch } = useUser();

  const signin = (): void => {
    apiSignin(email, password).then((response) => {
      // eslint-disable-next-line no-console
      if (response.status === API_STATUS.SUCCESS) {
        dispatch({
          action: USER_ACTIONS.SIGN_IN,
          payload: {
            user: response.unwrap()
          }
        });
        return;
      }
      const title = response.getError().title;
      let errMsg: string = '';
      switch(title) {
      case USER_ERRORS.EMAIL_PASSWORD_INCORRECT:
        errMsg = 'Email or password is incorrect';
        break;
      default:
        errMsg = 'Unknown error occurred';
      };
      setError(errMsg);
    }).catch((err: unknown) => {
      // eslint-disable-next-line no-console
      console.log(err);
      setError('Unknown error occurred');
    });
  };

  if (user) {
    return <SimpleLoader />;
  }

  return <div className='w-11/12 max-w-2xl' >
    <div className='max-w mx-auto flex gap-6 flex-col border border-gray-300 p-12 rounded-sm'>
      <h1 className='text-8xl font-bold'>
        <Trans id='common.components.organism.signin' >Sign in</Trans>
      </h1>
      <p>
        <Trans id='common.components.organism.paragraph.signin' >
          Hey! You gotta sign in before moving forward
        </Trans>
      </p>
      <p className=' text-red-400' >
        { error != '' ? error : null}
      </p>
      <div className='flex gap-4 flex-col' >
        <div className='flex flex-col gap-4'>
          <TextInput onChange={setEmail} >
            <Trans id='common.components.organism.email' >Email</Trans>
          </TextInput>
          <TextInput onChange={setPassword} type='password' >
            <Trans id='common.components.organism.password'>Password</Trans>
          </TextInput>
        </div>
        <div>
          <Button onClick={signin} >
            <Trans id='common.components.organism.signin' >Sign in</Trans>
          </Button>
        </div>
        <div>
          <Button intent='link' isLink to='/account/forgot-password' >
            <Trans id="common.components.organism.forgot-password" >Forgot Password</Trans>
          </Button>
        </div>
        <div className='my-8 border border-gray-200' />
        <div>
          <Button intent='outline' isLink to='/account/signup' >
            <Trans id="common.components.organism.create-account" >Create Account</Trans>
          </Button>
        </div>
      </div>
    </div>
  </div>;
};
