import { MenuItem } from 'src/common/interfaces/components';

export interface MenuProps {
  items: MenuItem | undefined | Array<MenuItem | MenuItem[]>
  baseUrl?: string,
  isChild?: boolean
}
