import React from "react";
import styles from "../Sign.module.css";

const Contacts = ({ formState, setFormState }) => {
  return (
    <div className={styles.UserContacts}>
      <input
        type="number"
        placeholder="Phone Number"
        value={formState.phoneNumber}
        onChange={(event) =>
          setFormState({ ...formState, phoneNumber: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Nationality"
        value={formState.nationality}
        onChange={(event) =>
          setFormState({ ...formState, nationality: event.target.value })
        }
      />
      <input
        type="date"
        placeholder="Birth Date"
        value={formState.birthDate}
        onChange={(event) =>
          setFormState({ ...formState, birthDate: event.target.value })
        }
      />
    </div>
  );
};

export default Contacts;
