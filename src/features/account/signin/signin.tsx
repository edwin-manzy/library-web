import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { SimpleLoader } from 'src/common/components/molecules/loaders';
import { SigninForm } from 'src/common/components/organism/forms/signin';
import { useUser } from 'src/store/user';

export const SignInPage = (): ReactNode => {
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

  return <div className='flex-1 items-center justify-center flex h-full'>
    <SigninForm />
  </div>;
};
