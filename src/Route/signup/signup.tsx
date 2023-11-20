import { Route, Routes } from "react-router-dom";
import "./signup.scss";
import RegisterOption from "./methods/registerOption";
import WithEmailAndPasswordRoutes  from "./methods/WithEmailAndPassword/WithEmailAndPasswordRoutes";

// import LoadingAnimationVariantOne from "../../components/loadingAnimation/variant1/variant1";

export default function Signup() {
  return (
    <div id="signupPage">
      {/* <LoadingAnimationVariantOne /> */}
      <Routes>
        <Route path="/" element={<RegisterOption />} />
        <Route path="/withEmailAndPassword/*" element={<WithEmailAndPasswordRoutes />} />
        
      </Routes>
    </div>
  );
}
