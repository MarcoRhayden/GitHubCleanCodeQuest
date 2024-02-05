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
  searchContent: string,
  spy: SutTypes,
): Promise<void> => {
  Helper.populateInput(searchContent, 'searchContent');
  const searchButton = screen.getByTestId('searchButton');
  fireEvent.click(searchButton);

  await spy.githubSpy.user.getUserInfo({ userName: searchContent });
  await spy.githubSpy.repos.getUserRepos({ userName: searchContent });
};

describe('UserInfo component', () => {
  let githubSpy: SutTypes;

  beforeEach(() => {
    githubSpy = makeSut();
  });

  test('displays no user info message when there is no user data', async () => {
    await waitFor(() => {
      expect(
        screen.getByText(
          'Please provide a valid GitHub user for displaying content.',
        ),
      ).toBeInTheDocument();
    });
  });

  test('show loading spinner', async () => {
    const searchContent = faker.string.alpha(10);
    simulateSearch(searchContent, githubSpy);

    await act(async () => {
      await waitFor(() => {
        expect(screen.getByTestId('spinner-test')).toBeTruthy();
      });
    });
  });
});
