import { motion } from "framer-motion";
import "./variant1.scss"

const LoadingAnimationVariantOne = () => {
  return (
    <div id="loadingAnimationVariantOne">
      <div className="loading-container">
        <div className="blurBackground"></div>
        <motion.div
          className="loading-circle"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
};

export default LoadingAnimationVariantOne;
