import React from 'react';
import classNames from 'classnames';

import Button from 'antd/lib/button';
import Form from 'antd/lib/form';

import styles from './index.less';

const FormItem = Form.Item;

export default ({ className, ...rest }) => {
  return (
    <FormItem>
      <Button size="large" className={styles['oauth-submit']} type="primary" htmlType="submit" {...rest} />
    </FormItem>
  );
};
