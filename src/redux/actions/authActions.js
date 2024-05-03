export const setUser = (userData) => ({
  type: 'auth/setUser',
  payload: userData,
});

export const logoutUser = () => ({
  type: 'auth/logout',
});