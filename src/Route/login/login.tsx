import { Route, Routes } from "react-router-dom";
import LoginOption from "./methods/loginOption";
import WithEmailAndPasswordRoutes  from "./methods/WithEmailPassword/WithEmailPassword";
import "./login.scss"

// import LoadingAnimationVariantOne from "../../components/loadingAnimation/variant1/variant1";

export default function Login() {
  return (
    <div id="loginPage">
      {/* <LoadingAnimationVariantOne /> */}
      <Routes>
        <Route path="/" element={<LoginOption />} />
        <Route path="/WithEmailAndPassword" element={<WithEmailAndPasswordRoutes />} />
        
      </Routes>
    </div>
  );
}
