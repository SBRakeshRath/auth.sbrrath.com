import "./App.css";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/profile";
import Login from "./components/login";
import ForgetPassword from "./components/forgetPassword";
import Signup from "./Route/signup/signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register/*" element={<Signup />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
      </Routes>
    </>
  );
}

export default App;
