import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  // const [error, setError] = useState();
  const changeUserNameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const changeAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const newUser = {
      name: enteredUserName,
      age: enteredAge,
    };
    props.onAddNewUser(newUser);
    setEnteredAge("");
    setEnteredUserName("");
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <label>Username</label>
        <input
          type="text"
          value={enteredUserName}
          id="username"
          onChange={changeUserNameHandler}
        />
        <label>Age (Years)</label>
        <input
          type="number"
          value={enteredAge}
          id="age"
          onChange={changeAgeHandler}
        />
        <Button type="submit" onClick={submitHandler}>
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
