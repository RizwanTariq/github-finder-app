import { useState, useContext } from "react";
import Swal from "sweetalert2";
import GithubContext from "../../context/github/GithubContext";
function UserSearch() {
  const [text, setText] = useState("");
  const { users, searchUsers, clearUsers } = useContext(GithubContext);

  //Handle Controlled input
  const handleChange = (e) => {
    setText(e.target.value);
  };

  //Handle Search
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      Swal.fire({
        position: "center",
        title: "Enter something to search! ",
        showConfirmButton: false,
        timer: 600,
      });
    } else {
      searchUsers(text);
      setText("");
    }
  };

  //Handle Clear User
  const handleClear = (e) => {
    e.preventDefault();
    clearUsers();
  };

  //JSX
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-2">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                onChange={handleChange}
                value={text}
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search users..."
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button onClick={handleClear} className="btn btn-ghost btn-lg">
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
