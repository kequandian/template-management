import 'antd/dist/antd.css';
import React, { Fragment } from 'react';
import { Icon } from 'antd';

import { inject } from '@/utils/inject';
import logo from '@/assets/logo.png';

inject('global', {
  name: 'ZERO_projectName',
  logo,
  loginTitle: 'ZERO_projectName',
  loginDesc: '登陆页描述性信息',
  links: [
    // {
    //   key: 'zero-element',
    //   title: 'zero-element',
    //   href: 'https://github.com/kequandian/zero-element',
    //   blankTarget: true,
    // },
  ],
  copyright: <Fragment>
    Copyright <Icon type="copyright" /> 2018 zero-element
  </Fragment>,
});