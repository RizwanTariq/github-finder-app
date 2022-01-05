function githubReducer(state, action) {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
export default githubReducer;
