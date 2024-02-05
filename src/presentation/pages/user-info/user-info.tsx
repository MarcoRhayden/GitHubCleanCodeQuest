import { useUserInfo } from './hooks/hooks';
import strings from './locales';
import styles from './user-info-styles.scss';

import { IGetRepoInfo } from '@/domain/usecases/github/get-repo-info';
import { IGetUserInfo } from '@/domain/usecases/github/get-user-info';
import { IGetUserRepos } from '@/domain/usecases/github/get-user-repos';
import Input from '@/presentation/components/input/input';
import LightSpinner from '@/presentation/components/light-spinner/light-spinner';

import React from 'react';

export type Props = {
  github: {
    user: IGetUserInfo;
    repos: IGetUserRepos;
    repoInfo: IGetRepoInfo;
  };
};

const UserInfo: React.FC<Props> = ({ github }: Props) => {
  const {
    userData,
    userInfoState,
    setUserInfoState,
    fetchUserInformationThrottled,
    loading,
  } = useUserInfo({ github });

  return (
    <React.Fragment>
      <header>
        <p>
          <a href="https://github.com/MarcoRhayden/GitHubCleanCodeQuest">
            {strings.projectTitle}
          </a>
        </p>
      </header>

      <div className={styles.cardContainer}>
        <div className={styles.searchContainer}>
          <Input
            id="searchContent"
            type="text"
            placeholder={strings.gitUser}
            value={userInfoState.searchContent}
            name={'searchContent'}
            state={userInfoState}
            setState={setUserInfoState}
            customStyle={styles.searchInput}
          />
          <button
            data-testid={'searchButton'}
            onClick={fetchUserInformationThrottled}
            className={styles.searchButton}>
            {strings.search}
          </button>
        </div>

        {loading ? (
          <LightSpinner customStyle={styles.spinner} />
        ) : userData ? (
          <React.Fragment>
            <img
              className={styles.round}
              src={userData.avatar_url}
              alt="user"
            />
            <h3>{userData.name}</h3>
            <h6>{userData?.email ?? strings.emailNotShare}</h6>
            <p>{userData.bio}</p>
            <div className={styles.button}>
              <a
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.primary} ${styles.ghost} ${styles.profileButton}`}>
                {strings.profile}
              </a>
            </div>
            <div className={styles.followInfo}>
              <div>
                <p>
                  <i className="bx bx-user" />
                  {strings.followers}
                </p>
                <span>{userData.followers}</span>
              </div>
              <div>
                <p>
                  <i className="bx bx-user-plus"></i> {strings.following}
                </p>
                <span>{userData.following}</span>
              </div>
            </div>
            <div className={styles.repositories}>
              <h6>{strings.repositories}</h6>
              {[...(userData.repositories || [])]
                .sort((a, b) => b.stargazers_count - a.stargazers_count)
                .map((repo, index) => (
                  <ul key={`${index}-${repo.full_name}`}>
                    <li>
                      <a href={repo.html_url}>{repo.name}</a>
                      <span className="repo-info">
                        <i className="bx bx-star" /> {repo.stargazers_count}
                      </span>
                    </li>
                  </ul>
                ))}
            </div>
          </React.Fragment>
        ) : (
          <div className={styles.noDataMessageContainer}>
            <p className={styles.noDataMessage}>{strings.noUserInfo}</p>
          </div>
        )}
      </div>

      <footer>
        <p>
          <a>{strings.projectTitle}</a>
          {strings.copyright}
        </p>
      </footer>
    </React.Fragment>
  );
};

export default UserInfo;
