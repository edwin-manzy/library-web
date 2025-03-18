import { ReactElement } from 'react';
import { useUser } from 'src/store/user';

export const HeaderAccount = (): ReactElement | null => {
  const { user } = useUser();

  if (!user) {
    return null;
  }
  return <div className='flex gap-5 items-center' >
    <div className='w-20 h-20 rounded-full bg-gray-100 font-black ' />
    <div>
      <p className='font-bold' >{ user.name }</p>
      <p className='text-md' >{ user.type }</p>
    </div>
  </div>;
};
