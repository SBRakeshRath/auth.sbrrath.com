// import { Button, TextField } from "@mui/material";
import { motion } from "framer-motion";
import MailIcon from "@mui/icons-material/Mail";
import LoopIcon from "@mui/icons-material/Loop";

import "./style/registerOption.scss";
import RightSideComponent from "../../../components/containers/RightSideComponent";
import { Link } from "react-router-dom";

export default function registerOption() {
  return (
    <div className="registerOption">
      <div className="leftSide">
        <div className="contentSection">
          <h1>Choose a Registration Method</h1>
          <Link to="/login">already have an account? login</Link>
          <motion.div className="optionContainerWrapper">
            <Link to="/register/loginWithEmailAndPassword">
              <motion.div
                className="optionContainer"
                // initial={{
                //   opacity: 0,
                //   scale: 0.5,
                // }}
                // animate={{ opacity: 1, scale: 1 }}
              >
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
