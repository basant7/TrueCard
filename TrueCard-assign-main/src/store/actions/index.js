export * from './auth/auth';
export * from './userList/userList';
export const resetApp = payload => ({
  type: 'RESET_APP',
  payload,
});
