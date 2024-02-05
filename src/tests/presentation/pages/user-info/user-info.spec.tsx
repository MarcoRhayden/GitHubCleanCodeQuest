import { Helper } from '../../mocks';
import { GetRepoInfoSpy } from '../../mocks/mock-get-repos-info';
import { GetUserInfoSpy } from '../../mocks/mock-get-user-info';
import { GetUserReposSpy } from '../../mocks/mock-get-user-repos';

import UserInfo from '@/presentation/pages/user-info/user-info';
import { faker } from '@faker-js/faker';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { RecoilRoot } from 'recoil';

import React from 'react';
import { act } from 'react-dom/test-utils';

type SutTypes = {
  githubSpy: {
    user: GetUserInfoSpy;
    repos: GetUserReposSpy;
    repoInfo: GetRepoInfoSpy;
  };
};

const makeSut = (): SutTypes => {
  const githubSpy = {
    user: new GetUserInfoSpy(),
    repos: new GetUserReposSpy(),
    repoInfo: new GetRepoInfoSpy(),
  };

  render(
    <RecoilRoot>
      <UserInfo github={githubSpy} />
    </RecoilRoot>,
  );

  return {
    githubSpy,
  };
};

const simulateSearch = async (
  searchContent = faker.string.alpha(10),
): Promise<void> => {
  Helper.populateInput(searchContent, 'searchContent');
  const searchButton = screen.getByTestId('searchButton');
  fireEvent.click(searchButton);
};

describe('UserInfo component', () => {
  test('show loading spinner', async () => {
    const { githubSpy } = makeSut();

    const searchContent = faker.string.alpha(10);
    simulateSearch(searchContent);

    await act(async () => {
      await waitFor(() => {
        expect(screen.getByTestId('spinner-test')).toBeTruthy();
      });
    });
  });
});
