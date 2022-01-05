import { createContext, useReducer } from "react";
import githubReducer from "./githubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export function GithubProvider({ children }) {
  const initialState = {
    users: [],
    isLoading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  //FETCH USERS FROM GITHUB API
  async function fetchUsers() {
    setLoading();
    console.log(state.isLoading);
    const res = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token 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`,
      },
    });
    const data = await res.json();
    dispatch({
      type: "GET_USERS",
      payload: { users: data, isLoading: false },
    });
  }
  //SET LOAD SCROLLING TO TRUE
  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };
  return (
    <GithubContext.Provider
      value={{ users: state.users, isLoading: state.isLoading, fetchUsers }}
    >
      {children}
    </GithubContext.Provider>
  );
}
export default GithubContext;
