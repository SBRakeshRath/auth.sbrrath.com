import { AnimatePresence, motion } from "framer-motion";
import "./style/SmallSingleErrorMessageContainer.scss";
import ErrorIcon from "@mui/icons-material/Error";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

export default function SmallSingleErrorMessageContainer({
  errorMessage,
  setErrorMessage,
}: {
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <AnimatePresence>
      {errorMessage !== "" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ ease: "easeInOut" }}
          className="smallSingleErrorMessageContainer"
        >
          <div className="text">
            <div className="errorIconContainer">
              <ErrorIcon />
            </div>
            <p>{errorMessage}</p>
          </div>
          <div
            className="closeIconContainer"
            onClick={() => {
              setErrorMessage("");
            }}
          >
            <CloseIcon />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
