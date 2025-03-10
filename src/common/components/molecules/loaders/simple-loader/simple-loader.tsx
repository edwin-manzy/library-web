import { ReactElement } from 'react';
import { CircularLoader } from 'src/common/components/atoms/loader';

export const SimpleLoader = (): ReactElement => {
  return <div className='flex items-center justify-center w-full h-full'>
    <div className='w-18 h-18'>
      <CircularLoader />
    </div>
  </div>;
};
