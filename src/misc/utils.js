import { css } from 'styled-components';

import Routes from '../routes';

export const getCurrentRoute = currentRoute => {
  const foundRoute = Routes.find(({ path }) => path === currentRoute);

  return foundRoute ? foundRoute : {};
};

export const getBreadcrumb = currentRoute => {
  const foundRoute = getCurrentRoute(currentRoute);

  return foundRoute ? foundRoute.name : '';
};

export const conditionallyHide = (props, property, condition) => {
  if (props[property] === condition) {
    return css`
      display: none;
    `;
  }
};
