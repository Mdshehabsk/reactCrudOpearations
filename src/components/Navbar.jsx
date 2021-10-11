import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="bg-info">
        <div className="container">
          <div className='div-wrapper' >
            <div className="brand">
              <NavLink  to='/' >crud opeartion</NavLink>
            </div>
              <div>
              <li>
                  <NavLink to='user/add' className='btn btn-outline-primary' >Add user</NavLink>
                </li>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}
