import React, { Fragment } from 'react';
import { formatMessage } from 'umi/locale';
import Link from 'umi/link';
import { Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';
import SelectLang from '@/components/SelectLang';
import styles from './OAuthLayout.less';
import { getInject } from '@/utils/inject';

class UserLayout extends React.PureComponent {

  render() {
    const { children } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.lang}>
          <SelectLang />
        </div>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to="/">
                <img alt="logo" className={styles.logo} src={getInject('global').logo} />
                <span className={styles.title}>{getInject('global').loginTitle}</span>
              </Link>
            </div>
            <div className={styles.desc}>{getInject('global').loginDesc}</div>
          </div>
          {children}
        </div>
        <GlobalFooter links={getInject('global').links} copyright={getInject('global').copyright} />
      </div>
    );
  }
}

export default UserLayout;
