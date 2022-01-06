function githubReducer(state, action) {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, ...action.payload };
    case "GET_USER":
      return {
        ...state,
        user: {
          userData: action.payload.userData,
          repos: action.payload.repos,
        },
        isLoading: action.payload.isLoading,
      };
    case "CLEAR_USERS":
      return { ...state, users: [] };
    case "SET_LOADING":
      return { ...state, isLoading: true };
    default:
      return state;
  }
}
export default githubReducer;
