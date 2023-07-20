import React, { useState } from "react";
import "./App.css";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import { CSSTransition } from "react-transition-group";
import { motion } from "framer-motion";

function App() {
  const [page, setPage] = useState(0);

  const pageIncrement = () => {
    setTimeout(() => {
      setPage(page + 1);
    });
  };
  const pageDecrement = () => {
    setTimeout(() => {
      setPage(page - 1);
    });
  };

  return (
    <>
      <motion.div
        className="App-container"
        animate={{ y: [-300, 0], opacity: [0, 0.3, 0.3, 0.3, 0.35, 0.35, 1] }}
        transition={{ duration: 1.5 }}
      >
        <div className="section-select">
          <motion.button
            className="signup-btn-select"
            disabled={page === 0}
            onClick={pageDecrement}
            whileTap={{ scale: 0.65 }}
          >
            Sign Up
          </motion.button>
          <motion.button
            className="login-btn-select"
            disabled={page === 1}
            onClick={pageIncrement}
            whileTap={{ scale: 0.65 }}
          >
            Log In
          </motion.button>
          <motion.div
            className="scroller"
            animate={{ x: page === 0 ? 0 : "120%" }}
          ></motion.div>
        </div>
        <div className="content-container">
          <CSSTransition
            in={page === 0}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <SignUp />
          </CSSTransition>
          <CSSTransition
            in={page === 1}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <Login />
          </CSSTransition>
        </div>
      </motion.div>
    </>
  );
}

export default App;
