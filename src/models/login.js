import { routerRedux } from 'dva/router';
import { stringify } from 'qs';
import { requestSet, tokenSet } from 'zero-element';
import { setAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';
import { reloadAuthorized } from '@/utils/Authorized';

const { query, post } = requestSet;
const { saveToken, removeToken } = tokenSet;

export default {
  namespace: 'login',

  state: {
    status: undefined,
  },

  effects: {
    *login({ payload }, { call, put }) {
      removeToken();
      const rst = yield call(post, '/api/oauth/login', payload);
      // Login successfully
      if (rst && rst.code === 200) {
        const { data } = rst;
        saveToken({
          account: payload.account,
          token: data.accessToken,
          avatar: data.avatar,
          perms: data.perms || [],
          remember: payload.autoLogin
        });
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
      removeToken();
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
