import "./../style/step1.scss";

import RightSideComponent from "../../../../components/containers/RightSideComponent";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { z } from "zod";
import SmallSingleErrorMessageContainer from "../../../../components/containers/messageContainers/SmallSingleErrorMessageContainer";
import sendOtpByEmail from "./serverRequest/sendOtpWithEmail";
import { useMutation } from "@tanstack/react-query";
import OtpTokenContext from "./context/otpTokenContext";
import { AxiosError } from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import LoadingAnimationVariantOne from "../../../../components/loadingAnimation/variant1/variant1";

export default function Step1() {
  const navigate = useNavigate();
  const [formError, setFormError] = useState("");

  const { setOtpToken } = useContext(OtpTokenContext);

  //get the route till now
  const { pathname } = useLocation();

  const mutation = useMutation(sendOtpByEmail, {
    onSuccess: (data) => {
      setOtpToken(data.data.data);
      navigate(pathname + "/step2");
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

  // functions;

  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");
    const email = e.currentTarget["email"].value;
    const emailFormatResult = z.string().trim().email().safeParse(email);

    if (emailFormatResult.success === false) {
      setFormError("Please enter a valid email");

      return;
    }

    mutation.mutate({ email: email });
  };

  // useEffects

  if (mutation.isLoading) {
    return (
      <div className="loadingAnimation">
        <LoadingAnimationVariantOne />
      </div>
    );
  }

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
              send otp
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
