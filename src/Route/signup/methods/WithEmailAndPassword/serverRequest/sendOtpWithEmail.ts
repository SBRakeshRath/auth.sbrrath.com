import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const sendOtpByEmail = (data: { email: string }) => {

    const formData = new FormData()

    formData.append("email", data.email)
    console.log(data.email)
    console.log("sending data")


    return axios.post(import.meta.env.VITE_CLOUD_FUNCTION_LINK as string + "sendOtpInEmail",formData)
}

export default function useSendOtpByEmail(data: { email: string }) {


    return useQuery(['SignUp', 'RegisterWithEmailAndPassword', 'sendOtpByEmail'], () => sendOtpByEmail(data), {
        enabled: false
    })
}


// --