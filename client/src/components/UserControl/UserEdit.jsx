import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers, putUser } from '../../redux/actions'
import './User.css'



export default function UserEdit() {

  const dispatch = useDispatch();
  const allUsers = useSelector((store) => store.users);
  const { email } = useParams();
  const thisUser = allUsers.find(e => e.email === email)

  useEffect(()=>{
    dispatch(getAllUsers())
  }, [allUsers])

  const [input, setInput] = useState({
    isAdmin: thisUser.isAdmin,
    isActive: thisUser.isActive,
    isBloked: thisUser.isBloked,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(putUser(email, input));
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="UserEditContainer">
      <div className="UserEditMargin">
        <h1>SUPER ADMIN USERS EDITION V-3.1</h1>
      </div>
      <div className="UserEditMargin">
        <h3>User edit</h3>
      </div>
      <div className="UserEditMargin">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="UserEditMargin">
            <label>Admin:</label>
            <select
              value={input.isAdmin}
              name='isAdmin'
              onChange={(e) => handleChange(e)}
            >
              <option value={true}>Yes</option>
              <option value={false} >No</option>
            </select>
          </div>
          <div className="UserEditMargin">
            <label>Active:</label>
            <select
              value={input.isActive}
              name='isActive'
              onChange={(e) => handleChange(e)}
            >
              <option value={true}>Yes</option>
              <option value={false} >No</option>
            </select>
          </div>
          <div className="UserEditMargin">
            <label>Banned:</label>
            <select
              value={input.isBloked}
              name='isBloked'
              onChange={(e) => handleChange(e)}
            >
              <option value={true}>Yes</option>
              <option value={false} >No</option>
            </select>
          </div>
          <div className="UserEditMargin">
            <button className="btn btn-outline-success me-2" type='submit' onClick={handleSubmit}>
              <Link to={`/profile/admin/usercontrol/userdetail/${thisUser.email}`}>Modify</Link>
            </button>
            <button className="btn btn-outline-success me-2">
              <Link to={`/profile/admin/usercontrol/userdetail/${thisUser.email}`}>Cancel</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}