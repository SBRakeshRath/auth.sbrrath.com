import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import SmallSingleErrorMessageContainer from "../../../../components/containers/messageContainers/SmallSingleErrorMessageContainer";
import { CheckBox } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./../style/WithEmailPassword.scss";

export default function WithEmailAndPassword() {
  //state

  const [formError, setFormError] = useState("");

  //functions

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");
    const email = e.currentTarget["email"].value.trim();
    const password = e.currentTarget["password"].value.trim();
    const rememberMe = e.currentTarget["rememberMe"].checked;

    console.log(email, password, rememberMe);
  };
  return (
    <div className="loginWithEmailPasswordContainer">
      <div className="formContainer">
        <h1>LOG IN</h1>
        <form onSubmit={handleSubmit}>
          <SmallSingleErrorMessageContainer
            errorMessage={formError}
            setErrorMessage={setFormError}
          />
          <TextField variant="outlined" label="Email" name="email" />
          <TextField
            variant="outlined"
            label="Password"
            name="password"
            type="password"
          />

          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember me"
          />
          <Button variant="contained" type="submit">
            LOG IN
          </Button>
        </form>
        <div className="extraActions">
          <Link to="/signup">Create an account</Link>
          <Link to="/forgotPassword">Forgot password</Link>
        </div>
      </div>
    </div>
  );
}
