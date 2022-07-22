import React, { useState } from "react";

import ErrorModal from "./Component/UI/ErrorModal";
import AddUser from "./Component/User/AddUser";
import UserList from "./Component/User/UserList";

function App() {
  const [usersList, setUserList] = useState([]);
  const [error, setError] = useState(false);
  const [massage, setMassage] = useState(
    "Please enter a valid name and age (non-empty values)."
  );

  const addNewUserHandler = (item) => {
    //Handel Error Massage
    if (item.name === "" && item.age === "") {
      setError(true);
      return;
    } else if (item.name !== "" && item.age < 0) {
      setError(true);
      setMassage(" Please enter a valid age (Greater Than Zero).");
      return;
    } else if (item.name === "" && item.age < 0) {
      setError(true);
      setMassage(
        " Please enter a valid name (non-empty values) and age (Greater Than Zero)."
      );
      return;
    }

    // Add New User
    setUserList((pervElement) => {
      return [item, ...pervElement];
    });
  };

  //Cancel Error Massage
  const onCloseErrorMassage = () => {
    setError(false);
  };
  return (
    <div>
      <AddUser onAddNewUser={addNewUserHandler} />
      <UserList items={usersList} />

      {error && (
        <ErrorModal onConfirm={onCloseErrorMassage} massage={massage} />
      )}
    </div>
  );
}

export default App;
