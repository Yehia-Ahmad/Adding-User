import React from "react";

import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.items.map((item, key) => (
          <li key={key}>
            {item.name} ({item.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
