export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUsername = state => state.auth.user.name;

export const selectIsRefreshing = state => state.auth.isRefreshing;

// const authSelectors = {
//   getIsLoggedIn,
//   getUsername,
//   selectIsRefreshing,
// };
// export default authSelectors;
