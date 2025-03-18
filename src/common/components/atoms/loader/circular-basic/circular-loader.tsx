import { ReactElement } from 'react';

export const CircularLoader = (): ReactElement => {
  return <div className={`w-full h-full rounded-full
    border-t-3 border-l-3 animate-spin border-black`} />;
};
