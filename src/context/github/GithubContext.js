import { createContext, useReducer } from "react";
import githubReducer from "./githubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export function GithubProvider({ children }) {
  const initialState = {
    users: [],
    user: { userData: {}, repos: [] },
    isLoading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  //FETCH USERS FROM GITHUB API (TEST FUNCTION)
  //   async function fetchUsers() {
  //     setLoading();
  //     console.log(state.isLoading);
  //     const res = await fetch(
  //       `${GITHUB_URL}/users`
  //       ,
  //       {
  //         headers: {
  //           Authorization: `token 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`,
  //         },
  //       }
  //     );
  //     const data = await res.json();
  //     dispatch({
  //       type: "GET_USERS",
  //       payload: { users: data, isLoading: false },
  //     });
  //   }

  //Search users from Github
  async function searchUsers(text) {
    setLoading();
    const res = await fetch(`${GITHUB_URL}/search/users?q=${text}`);
    const { items } = await res.json();
    dispatch({
      type: "GET_USERS",
      payload: { users: items, isLoading: false },
    });
  }

  //Fetch repositories of Specific User
  async function getRepos(login) {
    const res = await fetch(`${GITHUB_URL}/users/${login}/repos`);
    const repos = await res.json();
    return repos;
  }
  //Fetch Single user from github API
  async function getUser(login) {
    setLoading();
    const res = await fetch(`${GITHUB_URL}/users/${login}`);
    const userData = await res.json();
    const repos = await getRepos(login);
    dispatch({
      type: "GET_USER",
      payload: { userData, repos, isLoading: false },
    });
  }

  //Clear Users list
  function clearUsers() {
    dispatch({
      type: "CLEAR_USERS",
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
      value={{
        ...state,
        searchUsers,
        clearUsers,
        getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}
export default GithubContext;
