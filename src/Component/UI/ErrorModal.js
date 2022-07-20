import React from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  let classes = styles.hidden;
  const onClickHandler = () => {
    classes = styles.hidden;
    return (
      <Card className={classes}>
        <header className={styles.header}>
          <h2>Invalid input</h2>
        </header>
        <div className={styles.content}>
          <p> Please enter a valid name and age (non-empty values).</p>
        </div>
        <footer className={styles.actions}>
          <Button>Okay</Button>
        </footer>
      </Card>
    );
  };
  if (props.invalidData) {
    classes = styles.modal;
    console.log(true);

    return (
      <Card className={classes}>
        <header className={styles.header}>
          <h2>Invalid input</h2>
        </header>
        <div className={styles.content}>
          <p> Please enter a valid name and age (non-empty values).</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={onClickHandler}>Okay</Button>
        </footer>
      </Card>
    );
  }
  return (
    <Card className={classes}>
      <header className={styles.header}>
        <h2>Invalid input</h2>
      </header>
      <div className={styles.content}>
        <p> Please enter a valid name and age (non-empty values).</p>
      </div>
      <footer className={styles.actions}>
        <Button>Okay</Button>
      </footer>
    </Card>
  );
};

export default ErrorModal;
