interface Environment {
  domain: string;
  endpoint: string;
  root: string;
  name: string;
}

const development: Environment = {
  domain: 'https://github.com/',
  endpoint: 'https://api.github.com/',
  root: 'https:///github.com/',
  name: 'Development',
};

const Environments: { [key: string]: Environment } = {
  dev: development,
};

export const environmentKey = process.env.REACT_APP_ENVIRONMENT_KEY || 'dev';
export const defaultEnvironment = Environments[environmentKey];
