import React, { useState } from "react";
import AddUser from "./Component/User/AddUser";
import UserList from "./Component/User/UserList";

function App() {
  const [usersList, setUserList] = useState([{ name: "Yahya", age: 21 }]);
  const addNewUserHandler = (item) => {
    console.log(item);
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
