import axios from "axios";

const verifyOtp = (data: {
  emailToken: string;
  otp: string;
  password: string;
}) => {
  return axios.post(
    (import.meta.env.VITE_CLOUD_FUNCTION_LINK as string) + "createUser",
    data
  );
};

export default verifyOtp;
