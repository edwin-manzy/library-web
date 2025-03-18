import { Trans } from '@lingui/react';
import { ReactNode } from 'react';

import { Button } from 'src/common/components/atoms/button/button';

export const NotFoundPage = (): ReactNode => {

  return <div className='w-full h-full flex items-center justify-center'>
    <div className='flex flex-col gap-4 items-center' >
      <p className='text-9xl font-bold' >404</p>
      <h1 className='text-3xl font-extrabold' >
        <Trans id="features.not-found.title">Page not found</Trans>
      </h1>
      <p className='text-gray-600 max-w-lg text-center' >
        <Trans id="features.not-found.par" >
          The page you are looking for has expired, is no longer available, or does not exist.
        </Trans>
      </p>
      <Button isLink to='/' >
        <Trans id="features.not-found.back-to-home" >Back to home</Trans>
      </Button>
    </div>
  </div>;
};
