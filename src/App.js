import React, { useState } from "react";

import ErrorModal from "./Component/UI/ErrorModal";
import AddUser from "./Component/User/AddUser";
import UserList from "./Component/User/UserList";

function App() {
  const [usersList, setUserList] = useState([{ name: "Yahya", age: 21 }]);
  const [oldOnInvalid, setNewOnInvalid] = useState(false);
  const addNewUserHandler = (item) => {
    console.log(item);
    if (item.name === "" || item.age === "") {
      setNewOnInvalid(true);
      return;
    }
    setUserList((pervElement) => {
      setNewOnInvalid(false);
      return [item, ...pervElement];
    });
  };
  return (
    <div>
      <AddUser onAddNewUser={addNewUserHandler} />
      <UserList items={usersList} />
      <ErrorModal invalidData={oldOnInvalid} />
    </div>
  );
}

export default App;
