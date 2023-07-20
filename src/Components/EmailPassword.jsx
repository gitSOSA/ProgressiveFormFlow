import React from "react";
import styles from "../Sign.module.css";

const EmailPassword = ({ formState, setFormState }) => {
  return (
    <div className={styles.EmailPassword}>
      <input
        type="email"
        placeholder="Email"
        value={formState.email}
        onChange={(event) =>
          setFormState({ ...formState, email: event.target.value })
        }
      />
      <input
        type="password"
        placeholder="Password"
        value={formState.password}
        onChange={(event) =>
          setFormState({ ...formState, password: event.target.value })
        }
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={formState.passwordConfirmation}
        onChange={(event) =>
          setFormState({
            ...formState,
            passwordConfirmation: event.target.value,
          })
        }
      />
    </div>
  );
};

export default EmailPassword;
