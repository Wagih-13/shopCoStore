export interface MenuItem {
    path: string;
    label: string;
    isOpen?: boolean;
    children?: MenuItem[];
  }
  export interface StatusItem {
    label: string;
    status: boolean;
  }
  export interface allChildren {
    label: string;
    children: MenuItem[];
  }
  export interface ChildrenItem {
    path: string;
    label: string;
  }
  
  export type AllDropDownStatus = StatusItem[];
  export type Menu = MenuItem[];
  export type Children = ChildrenItem[];
  export type allLinksChildren = allChildren[];