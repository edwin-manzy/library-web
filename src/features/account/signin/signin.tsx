import { ReactNode } from 'react';
import { SigninForm } from 'src/common/components/organism/forms/signin';

export const SignInPage = (): ReactNode => {
  return <div className='flex-1 items-center justify-center flex h-full'>
    <SigninForm />
  </div>;
};
