import React, {
  SetStateAction,
  createContext,
  useState,
  Dispatch,
} from "react";

interface OtpTokenContextInterface {
  otpToken: string;
  setOtpToken: Dispatch<SetStateAction<string>>;
}

export const OtpTokenContext = createContext<OtpTokenContextInterface>(
  {} as OtpTokenContextInterface
);

export function OtpTokenContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [otpToken, setOtpToken] = useState("");

  return (
    <OtpTokenContext.Provider value={{ otpToken, setOtpToken }}>
      {children}
    </OtpTokenContext.Provider>
  );
}

export default OtpTokenContext;
