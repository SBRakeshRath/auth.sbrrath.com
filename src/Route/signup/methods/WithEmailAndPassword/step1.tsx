// import { Button, TextField } from "@mui/material";
import "./../style/step1.scss";

import RightSideComponent from "../../../../components/containers/RightSideComponent";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import { z } from "zod";
import SmallSingleErrorMessageContainer from "../../../../components/containers/messageContainers/SmallSingleErrorMessageContainer";
import useSendOtpByEmail from "./serverRequest/sendOtpWithEmail";

export default function Step1() {
  const [formError, setFormError] = useState("");
  const [email, setEmail] = useState("");

  const { isLoading, isFetching, data, refetch,error } = useSendOtpByEmail({ email });
  // functions;

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");
    setEmail("");
    const email = e.currentTarget["email"].value;
    const emailFormatResult = z.string().trim().email().safeParse(email);

    if (emailFormatResult.success === false) {
      setFormError("Please enter a valid email");

      return;
    }
    setEmail(emailFormatResult.data);
    refetch();
  };

  //server Requests

  //Send Otp in email

  // console.log(data,error);

  console.log(import.meta.env.VITE_CLOUD_FUNCTION_LINK)

  return (
    <div className="step1">
      <div className="leftSide">
        <div className="contentSection">
          <h1>Enter Your Email</h1>
          <form onSubmit={formSubmit}>
            <SmallSingleErrorMessageContainer
              errorMessage={formError}
              setErrorMessage={setFormError}
            />
            <TextField variant="outlined" label="Email" name="email" />
            <Button variant="contained" type="submit">
              Send OTP
            </Button>
          </form>
        </div>
      </div>
      <RightSideComponent>
        <p>Begin your journey by entering a email!!</p>
      </RightSideComponent>
    </div>
  );
}
