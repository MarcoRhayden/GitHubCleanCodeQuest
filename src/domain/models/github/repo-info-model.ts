import { OwnerInfoModel } from './owner-info-model';

export type RepoInfoModel = {
  name: string;
  full_name: string;
  owner: OwnerInfoModel;
  html_url: string;
  description: string;
  url: string;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  subscribers_count: number;
};
