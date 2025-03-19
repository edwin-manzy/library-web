import { UserType } from '../user';

export interface MenuItem {
  link: string;
  label: string;
  userType: {[key in UserType]?: boolean},
  children?: MenuItem[] | MenuItem[][]
};
