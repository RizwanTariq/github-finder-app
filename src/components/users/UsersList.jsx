import { useEffect, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
function UsersList() {
  const { isLoading, users, fetchUsers } = useContext(GithubContext);
  useEffect(() => {
    fetchUsers();
  }, []);

  if (!isLoading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user, index) => (
          <UserItem key={index} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UsersList;
