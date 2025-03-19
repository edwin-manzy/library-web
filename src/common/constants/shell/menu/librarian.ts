import { USER_TYPES } from 'src/common/constants/user';
import { MenuItem } from 'src/common/interfaces/shell';


export const librarianMenu: MenuItem[] = [
  {
    link: '/',
    label: 'home',
    userType: {
      [USER_TYPES.ADMINISTRATOR]: true,
    },
    children: undefined
  },
  {
    link: '/books',
    label: 'books',
    userType: {}
  },
  {
    link: '/activity',
    label: 'activity',
    userType: {}
  },
  {
    link: '',
    label: '',
    userType: {}
  }
];
