import { Route, Routes } from "react-router-dom";

import {OtpTokenContextProvider} from "./context/otpTokenContext";

import Step3 from "./step3";
import Step1 from "./step1";
import Step2 from "./step2";
import Step4 from "./step4";

export default function WithEmailAndPasswordRoutes() {
  return (
    <OtpTokenContextProvider>
      <Routes>
        <Route path="/" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/step4" element={<Step4 />} />
      </Routes>
    </OtpTokenContextProvider>
  );
}
