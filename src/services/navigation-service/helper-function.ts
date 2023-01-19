/* eslint-disable import/prefer-default-export */

import { INavigation } from './navigation-header-service';

export const parseNavLinks = (navigationData: INavigation[]) =>
  navigationData.map((value) => ({
    id: value.navigationLink,
    label: value.navigationTitle,
    link: value.navigationLink,
    items: value.children.length
      ? value.children.map((child) => ({
          title: child.navigationTitle,
          link: child.navigationLink
        }))
      : undefined
  }));
