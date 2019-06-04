import { routerRedux } from 'dva/router';
import { stringify } from 'qs';
import { query, post } from 'zero-element/lib/utils/request';
import { setAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';
import { reloadAuthorized } from '@/utils/Authorized';

export default {
  namespace: 'login',

  state: {
    status: undefined,
  },

  effects: {
    *login({ payload }, { call, put }) {
      // TODO remove token
      const rst = yield call(post, '/api/oauth/login', payload);
      // Login successfully
      if (rst && rst.code === 200) {
        const { data } = rst;
        // TODO save token
        yield put({
          type: 'changeLoginStatus',
          payload: {
            currentAuthority: data.permissions,
          },
        });
        reloadAuthorized();
        yield put(routerRedux.replace('/'));
      }
    },

    *getCaptcha({ payload }, { call }) {
      yield call(getFakeCaptcha, payload);
    },

    *logout(_, { put }) {
      // TODO remove token
      yield put({
        type: 'changeLoginStatus',
        payload: {
          status: false,
          currentAuthority: 'guest',
        },
      });
      reloadAuthorized();
      yield put(
        routerRedux.push({
          pathname: '/user/login',
          search: stringify({
            redirect: window.location.href,
          }),
        })
      );
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      setAuthority(payload.currentAuthority);
      return {
        ...state,
        status: payload.status,
        type: payload.type,
      };
    },
  },
};
