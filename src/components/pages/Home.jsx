import React from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
export default function Home() {
  let history = useHistory();
  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const result = await axios.get("http://localhost:3005/user");
    setUser(result.data);
  };
  const deletUser = async (id) => {
    await axios.delete(`http://localhost:3005/user/${id}`);
    loadUser();
  };
  return (
    <>
      <div className="container my-5">
        <table className="table table-striped ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">email</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link
                      className="btn btn-primary mx-2"
                      to={`user/view/${user.id}`}
                    >
                      view
                    </Link>
                    <Link
                      className="btn btn-success mx-2"
                      to={`user/edit/${user.id}`}
                    >
                      edit
                    </Link>
                    <Link
                      className="btn btn-danger mx-2"
                      to="/"
                      onClick={() => deletUser(user.id)}
                    >
                      delete
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
