import { UserReposModel } from '../models/github/user-repos-model';

import { faker } from '@faker-js/faker';

export const mockUserRepos = (): UserReposModel[] => {
  const mockArray: UserReposModel[] = [];

  for (let i = 0; i < faker.number.int(5); i++) {
    mockArray.push({
      name: faker.lorem.word(),
      full_name: `${faker.lorem.word()}/${faker.lorem.word()}`,
      url: faker.internet.url(),
      html_url: faker.internet.url(),
      stargazers_count: faker.number.int(2),
      language: faker.lorem.word(),
    });
  }

  return mockArray;
};
