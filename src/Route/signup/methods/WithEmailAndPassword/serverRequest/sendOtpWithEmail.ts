// import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const sendOtpByEmail = (data: { email: string }) => {



    return axios.post(import.meta.env.VITE_CLOUD_FUNCTION_LINK as string + "sendOtpInEmail",{email:data.email})
}

// export default function useSendOtpByEmail(data: { email: string }) {


//     return useMutation(['SignUp', 'RegisterWithEmailAndPassword', 'sendOtpByEmail'], () => sendOtpByEmail(data), {
//     })
// }

export default sendOtpByEmail;


// --