import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';
import { getInject } from '@/utils/inject';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={
        getInject('global').links
      }
      copyright={
        getInject('global').copyright
      }
    />
  </Footer>
);
export default FooterView;
