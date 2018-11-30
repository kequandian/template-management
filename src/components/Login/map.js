import React from 'react';
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';

import styles from './index.less';

const map = {
  UserName: {
    component: Input,
    props: {
      size: 'large',
      prefix: <Icon type="user" className={styles['oauth-prefix-icon']} />,
      placeholder: '用户名',
    },
    rules: [{
      required: true, message: '请输入账户名！',
    }],
  },
  Password: {
    component: Input,
    props: {
      size: 'large',
      prefix: <Icon type="lock" className={styles['oauth-prefix-icon']} />,
      type: 'password',
      placeholder: '密码',
    },
    rules: [{
      required: true, message: '请输入密码！',
    }],
  },
  Mobile: {
    component: Input,
    props: {
      size: 'large',
      prefix: <Icon type="mobile" className={styles['oauth-prefix-icon']} />,
      placeholder: '手机号',
    },
    rules: [{
      required: true, message: '请输入手机号！',
    }, {
      pattern: /^1\d{10}$/, message: '手机号格式错误！',
    }],
  },
  Captcha: {
    component: Input,
    props: {
      size: 'large',
      prefix: <Icon type="mail" className={styles['oauth-prefix-icon']} />,
      placeholder: '验证码',
    },
    rules: [{
      required: true, message: '请输入验证码！',
    }],
  },
};

export default map;
