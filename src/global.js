import 'antd/dist/antd.css';
import React, { Fragment } from 'react';
import { Icon } from 'antd';

import { inject } from '@/utils/inject';
import logo from '@/assets/logo.png';

import { endpointSet } from 'zero-element';

const { set: setEndpoint } = endpointSet;
setEndpoint("http://127.0.0.1:8080");

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
    Copyright <Icon type="copyright" /> 2019 zero-element
  </Fragment>,
});