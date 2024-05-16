import React, { useEffect, useState } from 'react'
import axios from 'axios';


function Lists() {

  const url = "https://dummyjson.com/user"
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getData = async () => {

      const response = await axios.get(url);
      const data = response.data;
      setUsers(data.users)
    };

    getData();
  }, []);


  return (<div className='prod'>
    {users.map((user) => (
      <div className='main' key={user.id}>
        <div className='text-center bg-success p-1'>
          <h3>My Users {user.id}</h3>
        </div>
        <div className='text'>
          <div>
            <h3>FullName:<span> {user.firstName} {user.lastName}</span></h3>
            <h4>Age:<span> {user.age}</span></h4>
            <h4>Male: <span> {user.gender} </span></h4>
            <h4>email: <span>{user.email}  </span></h4>
            <h4>Username: <span> {user.username} </span></h4>
            <h4>Password: <span>{user.password}  </span></h4>

          </div>
          <div className='img'>
            <img src={user.image} alt="" />
          </div>
        </div>
      </div>
    ))}
  </div>);

}

export default Lists;
