import React from "react";

import UsersList from "../Components/UserList/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Lanre",
      image: "https://avatars2.githubusercontent.com/u/17790578?s=460&v=4",
      places: 3
    },
    {
      id: "u2",
      name: "Lanre Asiwaju",
      image: "https://avatars2.githubusercontent.com/u/17790578?s=460&v=4",
      places: 6
    },
    {
      id: "u3",
      name: "Lanre Toks",
      image: "https://avatars2.githubusercontent.com/u/17790578?s=460&v=4",
      places: 5
    }
  ];

  return (
    <div>
      <UsersList items={USERS} />
    </div>
  );
};

export default Users;
