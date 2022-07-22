import React from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  const closeErrorMassageHanler = () => {
    props.onConfirm();
  };
  return (
    <>
      <div onClick={closeErrorMassageHanler} className={styles.backdrop} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>Invalid input</h2>
        </header>
        <div className={styles.content}>
          <p> {props.massage} </p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={closeErrorMassageHanler}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
