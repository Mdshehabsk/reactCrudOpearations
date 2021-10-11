import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function Home() {
  const {id} = useParams()
  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3005/user/${id}`);
    setUser([result.data]);
  };

  return (
    <>
      <div className="container my-5">
        <h1 className='text-center'>Your data</h1>
            {
                user.map((userData,index)=>{
                    return(
                        <ol>

                            <li key={index} >{`name = ${userData.name}`} </li>
                            <li key={index} > {`username = ${userData.username}`} </li>
                            <li key={index} > {`email = ${userData.email}`} </li>
                        </ol>
                    )
                })
            }
      </div>
    </>
  );
}
