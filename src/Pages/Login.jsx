import styles from "../Log.module.css";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input type="text" placeholder="User Name" />
        <input type="password" placeholder="Password" />
        <motion.button
          type="button"
          whileTap={{ scale: 0.65 }}
          onClick={() => alert("Welcome back!")}
        >
          Enter
        </motion.button>
      </div>
    </div>
  );
};

export default Login;
