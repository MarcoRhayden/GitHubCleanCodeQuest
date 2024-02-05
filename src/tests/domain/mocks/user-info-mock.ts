import { UserInfoModel } from '../models/github/user-info-model';

import { faker } from '@faker-js/faker';

export const mockUserInfo = (): UserInfoModel => ({
  login: faker.string.alphanumeric(10),
  name: faker.string.alphanumeric(10),
  avatar_url: faker.internet.url(),
  html_url: faker.internet.url(),
  email: faker.internet.email(),
  bio: faker.string.alphanumeric(10),
  followers: faker.number.int(2),
  following: faker.number.int(2),
});
