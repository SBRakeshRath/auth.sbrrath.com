import { Button, TextField } from "@mui/material";
import SmallSingleErrorMessageContainer from "../../../../components/containers/messageContainers/SmallSingleErrorMessageContainer";
import RightSideComponent from "../../../../components/containers/RightSideComponent";
import { useContext, useState } from "react";
import "./../style/step2.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { z } from "zod";
import OtpTokenContext from "./context/otpTokenContext";
import verifyOtp from "./serverRequest/verifyotp";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import LoadingAnimationVariantOne from "../../../../components/loadingAnimation/variant1/variant1";

export default function Step2() {
  const navigate = useNavigate();
  //FORMAT
  const otpFormat = z.string().trim();
  const passwordFormat = z.string().trim();

  const { otpToken } = useContext(OtpTokenContext);

  //STATE

  const [formError, setFormError] = useState("");

  const mutation = useMutation(verifyOtp, {
    onSuccess: () => {
      navigate("/login");
    },
    onError: (err) => {
      if (err instanceof Error) {
        if (err instanceof AxiosError) {
          if (err.response && err.response.data && err.response.data.message) {
            
            setFormError(err.response.data.message);
            return;
          }
          setFormError("Something went wrong");
          return;
        }
      }

      setFormError("Something went wrong");
    },
  });

  //FUNCTION

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");
    const otp = e.currentTarget["otp"].value.trim();
    const password = e.currentTarget["password"].value.trim();
    const CPassword = e.currentTarget["CPassword"].value.trim();

    if (otpFormat.safeParse(otp).success === false) {
      setFormError("Please enter a valid otp");
      return;
    }
    if (passwordFormat.safeParse(password).success === false) {
      setFormError("Please enter a valid password");
      return;
    }
    if (password !== CPassword) {
      setFormError("Password and Confirm Password are not same");
      return;
    }

    mutation.mutate({
      emailToken: otpToken,
      otp: otp,
      password: password,
    });
  };
  if (otpToken === "") {
    return <Navigate to="../" />;
  }

  if (mutation.isLoading) {
    return (
      <div className="loadingAnimation">
        <LoadingAnimationVariantOne />
      </div>
    );
  }

  return (
    <div className="step2">
      <div className="leftSide">
        <div className="contentSection">
          <h1>Enter Your OTP</h1>
          <form onSubmit={formSubmit}>
            <SmallSingleErrorMessageContainer
              errorMessage={formError}
              setErrorMessage={setFormError}
            />
            <TextField variant="outlined" label="OTP" name="otp" />
            <TextField variant="outlined" label="PASSWORD" name="password" />
            <TextField
              variant="outlined"
              label="CONFIRM PASSWORD"
              name="CPassword"
            />

            <Button variant="contained" type="submit">
              verify otp
            </Button>
            <div className="additionalOptionContainer">
              <Link to="../">Go Back to resend OTP</Link>
            </div>
          </form>
        </div>
      </div>
      <RightSideComponent>
        <p>Verify yourSelf by this OTP!!</p>
      </RightSideComponent>
    </div>
  );
}
