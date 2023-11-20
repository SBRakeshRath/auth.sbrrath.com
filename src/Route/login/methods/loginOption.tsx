// import { Button, TextField } from "@mui/material";
import { motion } from "framer-motion";
import MailIcon from "@mui/icons-material/Mail";
import LoopIcon from "@mui/icons-material/Loop";

import "./style/loginOption.scss"
import RightSideComponent from "../../../components/containers/RightSideComponent";
import { Link } from "react-router-dom";

export default function LoginOption() {
  return (
    <div className="logInrOption">
      <div className="leftSide">
        <div className="contentSection">
          <h1>Choose your login Method</h1>
          <Link to="/register">Don't have an account!! Register</Link>
          <motion.div className="optionContainerWrapper">
            <Link to="/login/WithEmailAndPassword">
              <motion.div className="optionContainer">
                <div className="iconContainer">
                  <MailIcon />
                </div>
                <div className="text">Email & Password</div>
              </motion.div>
            </Link>
            <Link to="/" style={{ pointerEvents: "none" }}>
              <motion.div
                className="optionContainer"
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                transition={{ duration: 2 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="iconContainer">
                  <LoopIcon />
                </div>
                <div className="text">Working for Others</div>
              </motion.div>
            </Link>

            <Link to="/" style={{ pointerEvents: "none" }}>
              <motion.div
                className="optionContainer"
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                transition={{ duration: 2 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="iconContainer">
                  <LoopIcon />
                </div>
                <div className="text">Working for Others</div>
              </motion.div>
            </Link>

            <Link to="/" style={{ pointerEvents: "none" }}>
              <motion.div
                className="optionContainer"
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                transition={{ duration: 2 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="iconContainer">
                  <LoopIcon />
                </div>
                <div className="text">Working for Others</div>
              </motion.div>
            </Link>
            <Link to="/" style={{ pointerEvents: "none" }}>
              <motion.div
                className="optionContainer"
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                transition={{ duration: 2 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="iconContainer">
                  <LoopIcon />
                </div>
                <div className="text">Working for Others</div>
              </motion.div>
            </Link>
            <Link to="/" style={{ pointerEvents: "none" }}>
              <motion.div
                className="optionContainer"
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                transition={{ duration: 2 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="iconContainer">
                  <LoopIcon />
                </div>
                <div className="text">Working for Others</div>
              </motion.div>
            </Link>
            <Link to="/" style={{ pointerEvents: "none" }}>
              <motion.div
                className="optionContainer"
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                transition={{ duration: 2 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="iconContainer">
                  <LoopIcon />
                </div>
                <div className="text">Working for Others</div>
              </motion.div>
            </Link>
            <Link to="/" style={{ pointerEvents: "none" }}>
              <motion.div
                className="optionContainer"
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                transition={{ duration: 2 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="iconContainer">
                  <LoopIcon />
                </div>
                <div className="text">Working for Others</div>
              </motion.div>
            </Link>
            <Link to="/" style={{ pointerEvents: "none" }}>
              <motion.div
                className="optionContainer"
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                transition={{ duration: 2 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="iconContainer">
                  <LoopIcon />
                </div>
                <div className="text">Working for Others</div>
              </motion.div>
            </Link>
            <Link to="/" style={{ pointerEvents: "none" }}>
              <motion.div
                className="optionContainer"
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                transition={{ duration: 2 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="iconContainer">
                  <LoopIcon />
                </div>
                <div className="text">Working for Others</div>
              </motion.div>
            </Link>
            <Link to="/" style={{ pointerEvents: "none" }}>
              <motion.div
                className="optionContainer"
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                transition={{ duration: 2 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="iconContainer">
                  <LoopIcon />
                </div>
                <div className="text">Working for Others</div>
              </motion.div>
            </Link>
            <Link to="/" style={{ pointerEvents: "none" }}>
              <motion.div
                className="optionContainer"
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                transition={{ duration: 2 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="iconContainer">
                  <LoopIcon />
                </div>
                <div className="text">Working for Others</div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
        <div className="bottomSection"></div>
      </div>
      <RightSideComponent>
        <p>
          Unlock limitless possibilities, register and embark on your journey
          today!
        </p>
      </RightSideComponent>
    </div>
  );
}
