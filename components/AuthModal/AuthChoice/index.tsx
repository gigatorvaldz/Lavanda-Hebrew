import React from "react";
import css from "./AuthChoice.module.scss";
import Button from "@/UI/ControlButton";
import Image from "next/image";
import FacebookIcon from "@/assets/Facebook.svg";
import GoogleIcon from "@/assets/Google.svg";

interface AuthChoiceI {
  setAuthType: React.Dispatch<
    React.SetStateAction<"registration" | "login" | "choice" | "reset">
  >;
}

const AuthChoice = ({ setAuthType }: AuthChoiceI) => {
  return (
    <div className={css.container}>
      <h3 className={css.heading}>להזמנה יש להיכנס או להירשם</h3>
      <div className={css.sign}>
        <Button onClick={() => setAuthType("registration")}>לשיר</Button>
        <Button onClick={() => setAuthType("login")}>התחברות</Button>
      </div>
      <span>אוֹ</span>
      <div className={css.social}>
        <Image src={FacebookIcon} alt="Facebook Icon" />
        <Image src={GoogleIcon} alt="Google Icon" />
      </div>
    </div>
  );
};

export default AuthChoice;
