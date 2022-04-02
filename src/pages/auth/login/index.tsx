import { LoginBanner } from './components/banner';
import { LoginForm } from './components/form';
import React from 'react';
import styles from './index.module.less';

export const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <div className={styles['logo-text']}>Fiber Arco Pro</div>
      </div>
      <div className={styles.content}>
        <div className={styles['content-inner']}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
