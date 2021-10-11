import axios from "axios";
import React from "react";
import { useHistory ,useParams} from "react-router-dom";
export default function EditUser() {
  const {id} = useParams()
  let history = useHistory();
  const [user, setUser] = React.useState({
    name: "",
    username: "",
    email: "",
  });
  const handleChange = (e) => {
    setUser({...user, [e.target.name]:e.target.value });
  };
  const formFunc = async(e) =>{
      e.preventDefault();
      await axios.put(`http://localhost:3005/user/${id}`,user)
      history.push('/')
  }
  const loadUser =async () =>{
     var result= await axios.get(`http://localhost:3005/user/${id}`)
     setUser(result.data)
  }
  React.useEffect(()=>{
      loadUser()
  },[])
  return (
    <>
      <div className="container p-releative">
        <div className="form">
          <h1 className="text-center">Edit user</h1>
          <form onSubmit={formFunc}>
            <div className="inputField">
              <input
                type="text"
                name='name'
                value={user.name}
                onChange={handleChange}
                placeholder='Your name'
              />
            </div>
            <div className="inputField">
              <input
                type="text"
                name='username'
                value={user.username}
                onChange={handleChange}
                placeholder='Your username'
              />
            </div>
            <div className="inputField">
              <input
                type="email"
                name='email'
                value={user.email}
                onChange={handleChange}
                placeholder='Your email'
              />
            </div>
            <div className="inputfield">
                <button className='btn btn-success d-block'  >Updata User</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

