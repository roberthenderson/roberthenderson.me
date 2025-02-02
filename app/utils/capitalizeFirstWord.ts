import { capitalize } from 'lodash';

export const capitalizeFirstWord = (text: string) =>
  capitalize((text.indexOf(' ') ? text.split(' ')[0] : text).toLowerCase());
