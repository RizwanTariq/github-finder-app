function githubReducer(state, action) {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, ...action.payload };
    case "CLEAR_USERS":
      return { ...state, users: [] };
    case "SET_LOADING":
      return { ...state, isLoading: true };
    default:
      return state;
  }
}
export default githubReducer;
