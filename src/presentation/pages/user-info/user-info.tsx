import strings from './locales';
import styles from './user-info-styles.scss';

import { IGetRepoInfo } from '@/domain/usecases/github/get-repo-info';
import { IGetUserInfo } from '@/domain/usecases/github/get-user-info';
import { IGetUserRepos } from '@/domain/usecases/github/get-user-repos';

import React from 'react';

export type Props = {
  github: {
    user: IGetUserInfo;
    repos: IGetUserRepos;
    repoInfo: IGetRepoInfo;
  };
};

const UserInfo: React.FC<Props> = ({ github }: Props) => {
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
          <input
            type="text"
            placeholder={strings.gitUser}
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>{strings.search}</button>
        </div>

        <img className={styles.round} src="templateImage" alt="user" />
        <h3>Name Template</h3>
        <h6>email@template.com</h6>
        <p>User description template</p>
        <div className={styles.button}>
          <button className={`${styles.primary} ${styles.ghost}`}>
            {strings.profile}
          </button>
        </div>
        <div className={styles.followInfo}>
          <div>
            <p>
              <i className="bx bx-user" />
              {strings.followers}
            </p>
            <span>999</span>
          </div>
          <div>
            <p>
              <i className="bx bx-user-plus"></i> {strings.following}
            </p>
            <span>99</span>
          </div>
        </div>

        <div className={styles.repositories}>
          <h6>{strings.repositories}</h6>
          <ul>
            <li>
              <a href="https://github.com/example-repo">Example Repo 1</a>
              <span className="repo-info">
                <i className="bx bx-star" /> {45}
              </span>
            </li>
            <li>
              <a href="https://github.com/another-repo">Another Repo 2</a>
              <span className="repo-info">
                <i className="bx bx-star" /> {50}
              </span>
            </li>
          </ul>
        </div>
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
