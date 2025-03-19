import { USER_TYPES } from 'src/common/constants/user';
import { MenuItem } from 'src/common/interfaces/components';


export const librarianMenu: Array<MenuItem[] | MenuItem> = [
  [{
    link: '/',
    label: 'home',
    userType: {
      [USER_TYPES.ADMINISTRATOR]: true,
    },
    children: undefined
  }],
  [{
    link: '/books',
    label: 'books',
    userType: {},
    children: [
      {
        link: '',
        label: 'browse',
        userType: {}
      },
      {
        link: '',
        label: 'borrowed',
        userType: {}
      },
      {
        link: '',
        label: 'due',
        userType: {}
      }
    ]
  }],
  [{
    link: '/activity',
    label: 'activity',
    userType: {},
    children: [
      {
        link: '',
        label: 'Borrowed',
        userType: {}
      }
    ]
  }],
  [{
    link: '',
    label: '',
    userType: {}
  }]
];
