import React from "react";
import styles from "../Sign.module.css";

const Name = ({ formState, setFormState }) => {
  return (
    <div className={styles.Username}>
      <input
        type="text"
        placeholder="First Name"
        value={formState.firstName}
        onChange={(event) =>
          setFormState({ ...formState, firstName: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Last Name"
        value={formState.lastName}
        onChange={(event) =>
          setFormState({ ...formState, lastName: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="User Name"
        value={formState.userName}
        onChange={(event) =>
          setFormState({ ...formState, userName: event.target.value })
        }
      />
    </div>
  );
};

export default Name;
