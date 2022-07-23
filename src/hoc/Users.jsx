import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

export const Users = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const result = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(result.data);
    };
    getUsers();
  });
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
