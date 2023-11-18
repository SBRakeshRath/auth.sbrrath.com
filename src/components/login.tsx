import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {

    //states
    const [pageMessage, setPageMessage] = useState<{
        message: string;
        messageType: "" | "err" | "suc";
      }>({ message: "", messageType: "" });


  //event function

  const closePageMessage = ()=>{setPageMessage({message:"",messageType:""})}


  const Login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div id="login">
      <h1>Login</h1>
      <p>Please Login to enter</p>

      {pageMessage.message.trim() !== "" ? (
        <div className="messageContainer">
            <div className="message"style={{color: pageMessage.messageType === "err" ? "red" : pageMessage.messageType==="suc"  ? "green" : "inherit"}} >{pageMessage.message}</div>
            <button className="closeMessage" onClick={closePageMessage}>&#10007</button>
        </div>
      ) : null}

      <form onSubmit={Login}>
        <input type="email" name="email" placeholder="Please enter email" />
        <input type="password" placeholder="enter password" />
        <input type="checkbox" name="remember-me" id="" />
        <p>To remember you Please tic the checkbox</p>
        <input type="submit" value="Login" />
      </form>
      <Link to="/forgetPassword">Forget Password?????</Link>
      <Link to="/register">create a new account</Link>
    </div>
  );
}
