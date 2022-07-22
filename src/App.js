import React, { useState } from "react";

import AddUser from "./Component/User/AddUser";
import UserList from "./Component/User/UserList";

function App() {
  const [usersList, setUserList] = useState([]);
  const addNewUserHandler = (item) => {
    console.log(item);
    if (item.name === "" || item.age === "") {
      return;
    }
    setUserList((pervElement) => {
      return [item, ...pervElement];
    });
  };
  return (
    <div>
      <AddUser onAddNewUser={addNewUserHandler} />
      <UserList items={usersList} />
    </div>
  );
}

export default App;
