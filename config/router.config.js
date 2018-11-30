module.exports = [
  // user
  {
    path: '/user',
    component: '../layouts/OAuthLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './Account/Login' },
      { path: '/user/logout', component: './Account/Logout' },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    // Routes: ['src/pages/Authorized'],
    // authority: ['config.edit', 'admin'],
    routes: [
      { path: '/', redirect: '/ZERO_defaultRoute' }, // 默认路由
      {
        component: '404',
      },
    ],
  },
];