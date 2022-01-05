import { createContext, useReducer } from "react";
import githubReducer from "./githubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export function GithubProvider({ children }) {
  const initialState = {
    users: [],
    isLoading: true,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  async function fetchUsers() {
    const res = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await res.json();

    dispatch({
      type: "GET_USERS",
      payload: { users: data, isLoading: false },
    });
  }
  return (
    <GithubContext.Provider
      value={{ users: state.users, isLoading: state.isLoading, fetchUsers }}
    >
      {children}
    </GithubContext.Provider>
  );
}
export default GithubContext;
