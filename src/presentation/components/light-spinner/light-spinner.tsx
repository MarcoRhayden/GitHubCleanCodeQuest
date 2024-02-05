import styles from './light-spinner-styles.scss';

import React from 'react';

type Props = {
  customStyle?: string;
};

const LightSpinner: React.FC<Props> = (props: Props) => (
  <span
    data-testid="spinner-test"
    className={[styles.loader, props.customStyle].join(' ')}
  />
);

export default LightSpinner;
