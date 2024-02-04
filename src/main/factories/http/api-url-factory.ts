import { defaultEnvironment } from '@/main/constants/environments';

export const makeApiUrl = (path: string): string => {
  return `${defaultEnvironment.endpoint}${path}`;
};

export const makeApiRootUrl = (path: string): string => {
  return `${defaultEnvironment.root}${path}`;
};
