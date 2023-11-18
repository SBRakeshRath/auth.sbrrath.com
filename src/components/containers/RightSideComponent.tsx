import BackgroundAnimationVAriant1 from "../backgroundAnimation/variant1/variant1";
import { ReactNode } from "react";
import "./rightSideComponents.scss"


export default function RightSideComponent({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="rightSide">
      <div className="logoContainer">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/auth-sbrrath-com-001.appspot.com/o/frontend-website-asses%2Flogo-color.svg?alt=media&token=7e640c72-b44b-4fe2-893b-be9d5772b0ca"
          alt="sbrrath"
        />
      </div>
      <div className="mainContainer">
        <BackgroundAnimationVAriant1 />
        
        {children}
      </div>
    </div>
  );
}
