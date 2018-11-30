import LS from './LS';
export function getAuthority() {
  return LS.get('permissions');
}

export function setAuthority(authority) {
  const proAuthority = typeof authority === 'string' ? [authority] : authority;
  return LS.set('permissions',proAuthority);
}
