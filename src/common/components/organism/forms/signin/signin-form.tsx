import { Trans } from '@lingui/react';
import { ReactElement } from 'react';
import { Button } from 'src/common/components/atoms/button';
import { TextInput } from 'src/common/components/atoms/text-input';

export const SigninForm = (): ReactElement => {
  return <div className='w-11/12 max-w-2xl' >
    <div className='max-w mx-auto flex gap-6 flex-col border border-gray-300 p-12 rounded-sm'>
      <h1 className='text-8xl font-bold'><Trans id='common.components.organism.signin' >Sign in</Trans></h1>
      <p><Trans id='common.components.organism.paragraph.signin' >Hey! You gotta sign in before moving forward</Trans></p>
      <div className='flex gap-4 flex-col' >
        <div className='flex flex-col  gap-4'>
          <TextInput >
            <Trans id='common.components.organism.email' >Email</Trans>
          </TextInput>
          <TextInput >
            <Trans id='common.components.organism.password'>Password</Trans>
          </TextInput>
        </div>
        <div>
          <Button><Trans id='common.components.organism.signin' >Sign in</Trans></Button>
        </div>
        <div>
          <Button intent='link' isLink to='/account/forgot-password' ><Trans id="common.components.organism.forgot-password" >Forgot Password</Trans></Button>
        </div>
        <div className='my-8 border border-gray-200' />
        <div>
          <Button intent='outline' isLink to='/account/signup' ><Trans id="common.components.organism.create-account" >Create Account</Trans></Button>
        </div>
      </div>
    </div>
  </div>;
};
