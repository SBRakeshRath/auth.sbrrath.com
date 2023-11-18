import { useState } from "react";

export default function ForgetPassword() {
  //states

  const [pageMessage, setPageMessage] = useState<{
    message: string;
    messageType: "" | "err" | "suc";
  }>({ message: "", messageType: "" });

  const [emailVerificationToken, setEmailVErificationToken] = useState<
    false | string
  >(false);

  //event function

  const closePageMessage = () => {
    setPageMessage({ message: "", messageType: "" });
  };

  const SendRegisterOtpEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const otpSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div id="forgetPassword">
      <h1>Forget Password</h1>
      <p>Reset Password</p>

      {pageMessage.message.trim() !== "" ? (
        <div className="messageContainer">
          <div
            className="message"
            style={{
              color:
                pageMessage.messageType === "err"
                  ? "red"
                  : pageMessage.messageType === "suc"
                  ? "green"
                  : "inherit",
            }}
          >
            {pageMessage.message}
          </div>
          <button className="closeMessage" onClick={closePageMessage}>
            &#10007
          </button>
        </div>
      ) : null}

      <form onSubmit={SendRegisterOtpEmail}>
        <input type="email" name="email" />
        <input type="submit" value="Send Otp" />
      </form>

      {emailVerificationToken && emailVerificationToken.trim() !== "" ? (
        <form onSubmit={otpSubmit}>
          <input type="text" name="otp" />
          <input type="submit" value="Verify Otp" />
        </form>
      ) : null}
    </div>
  );
}
