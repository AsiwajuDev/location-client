import React from "react";

import UsersList from "../Components/UserList/UsersList";

const Users = () => {
  const USERS = [
    { id: "u1", name: "Lanre Tokunbo", image: "../../Shared/me.png", places: 3 }
  ];

  return (
    <div>
      <UsersList items={USERS} />
    </div>
  );
};

export default Users;
