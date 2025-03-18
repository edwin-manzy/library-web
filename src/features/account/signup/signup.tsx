import { Trans } from '@lingui/react';
import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Button } from 'src/common/components/atoms/button';
import { TextInput } from 'src/common/components/atoms/text-input';
import { SimpleLoader } from 'src/common/components/molecules/loaders';
import { useUser } from 'src/store/user';

export const SignUpPage = (): ReactNode => {

  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      void navigate('/');
    }
  }, [user, navigate]);

  if (user) {
    return <SimpleLoader />;
  }

  return <div className='w-full h-full flex items-center justify-center'>
    <div className='w-11/12 max-w-2xl' >
      <div className='max-w mx-auto flex gap-6 flex-col border border-gray-300 p-12 rounded-sm'>
        <h1 className='text-8xl font-bold'>
          <Trans id='features.account.signup.signup' >Sign up</Trans>
        </h1>
        <p>
          <Trans id='features.account.signup.paragraph.signup' >
            Hey! You gotta sign in before moving forward
          </Trans>
        </p>
        <div className='flex gap-4 flex-col' >
          <div className='flex flex-col  gap-4'>
            <TextInput onChange={undefined} >
              <Trans id='features.account.signup.email' >Email</Trans>
            </TextInput>
            <TextInput onChange={undefined} >
              <Trans id='features.account.signup.password'>Password</Trans>
            </TextInput>
            <TextInput onChange={undefined} >
              <Trans id='features.account.signup.confirm-password'>Confirm password</Trans>
            </TextInput>
          </div>
          <div>
            <Button>
              <Trans id='features.account.signup.create-account' >Create account</Trans>
            </Button>
          </div>
          <div className='my-8 border border-gray-200' />
          <div>
            <Button intent='outline' isLink to='/account/signin' >
              <Trans id="common.components.organism.signin" >Sign in</Trans>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>;
};
