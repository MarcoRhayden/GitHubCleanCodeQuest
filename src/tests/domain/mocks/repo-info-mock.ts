import { OwnerInfoModel } from '../models/github/owner-info-model';
import { RepoInfoModel } from '../models/github/repo-info-model';

import { faker } from '@faker-js/faker';

export const mockRepoInfo = (): RepoInfoModel => ({
  name: faker.lorem.word(),
  full_name: `${faker.lorem.word()}/${faker.lorem.word()}`,
  owner: {
    login: faker.string.alphanumeric(10),
    avatar_url: faker.internet.url(),
    html_url: faker.internet.url(),
  } as OwnerInfoModel,
  html_url: faker.internet.url(),
  description: faker.lorem.sentence(),
  url: faker.internet.url(),
  stargazers_count: faker.number.int(2),
  watchers_count: faker.number.int(2),
  language: faker.lorem.word(),
  subscribers_count: faker.number.int(2),
});
