import React, { useState } from "react";
import Name from "../Components/Name";
import Contacts from "../Components/Contacts";
import EmailPassword from "../Components/EmailPassword";
import styles from "../Sign.module.css";
import { CSSTransition } from "react-transition-group";
import { motion } from "framer-motion";

const SignUp = () => {
  const [stage, setStage] = useState(0);

  const Step = ["Username", "User Contacts", "Email & Password"];

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    phoneNumber: "",
    nationality: "",
    birthDate: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  return (
    <div className={styles.formContainer}>
      <div className={styles.form}>
        <div className={styles.header}>
          <h1>{Step[stage]}</h1>
        </div>
        <div className={styles.body}>
          <CSSTransition
            in={stage === 0}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <Name formState={formState} setFormState={setFormState} />
          </CSSTransition>
          <CSSTransition
            in={stage === 1}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <Contacts formState={formState} setFormState={setFormState} />
          </CSSTransition>
          <CSSTransition
            in={stage === 2}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <EmailPassword formState={formState} setFormState={setFormState} />
          </CSSTransition>
        </div>
        <div className={styles.footer}>
          <motion.button
            disabled={stage === 0}
            onClick={() => setStage(stage - 1)}
            whileTap={{ scale: 0.65 }}
          >
            Prev
          </motion.button>
          <motion.button
            onClick={() => {
              if (stage === 2) {
                alert("Form Submitted!");
              } else {
                setStage(stage + 1);
              }
            }}
            whileTap={{ scale: 0.65 }}
          >
            {stage === 2 ? "Enter" : "Next"}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
