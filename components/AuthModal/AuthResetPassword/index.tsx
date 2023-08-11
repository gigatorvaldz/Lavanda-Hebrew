"use client";

import React, { useState } from "react";
import css from "./AuthResetPassword.module.scss";
import AuthInput from "../AuthInput";
import { Control, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { ConfirmResetPasswordRequest } from "@/interfaces/Auth";
import Button from "@/UI/ControlButton";
import classNames from "classnames";
import Image from "next/image";

import {
  changePassword,
  sendConfirmCode,
  sendRequestCode,
} from "@/service/user.service";

import keyIcon from "@/assets/Key.svg";

type Props = {
  setAuthType: React.Dispatch<
    React.SetStateAction<"registration" | "login" | "choice" | "reset">
  >;
};
const AuthLogin = ({ setAuthType }: Props) => {
  interface ConfirmResetPasswordForm extends ConfirmResetPasswordRequest {
    retryPassword: string;
  }

  const [isSend, setIsSend] = useState<boolean>(false);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>("");

  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors, isValid },
    getValues,
  } = useForm<ConfirmResetPasswordForm>({
    mode: "all",
  });

  const onSubmit: SubmitHandler<ConfirmResetPasswordRequest> = async (
    data: ConfirmResetPasswordRequest
  ) => {
    await changePassword(data);
    reset();
    setIsConfirmed(false);
    setIsDone(true);
  };

  const done = () => {
    setAuthType("login");
  };

  const send = () => {
    if (!isSend) {
      requestCode();
    } else {
      sendCode();
    }
  };

  const requestCode = async () => {
    const email = getValues("email");
    const response = await sendRequestCode({ email });
    let status;
    if (typeof response !== "string") {
      status = response.status;
    }
    if (status === 201) {
      setIsSend(true);
      setIsError("");
    } else {
      setIsError("Wrong email");
    }
  };

  const sendCode = async () => {
    const email = getValues("email");
    const code = Number(getValues("code"));
    const data = await sendConfirmCode({ email, code });
    if (data) {
      setIsSend(false);
      setIsConfirmed(true);
      setIsError("");
    } else {
      setIsError("Wrong code");
    }
  };

  let password = watch("password");

  return (
    <div className={css.container}>
      <h3
        className={classNames(css.heading, {
          [css.mainFocus]: !isSend,
        })}
      >
        שכחת את הסיסמא
      </h3>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        {!isConfirmed && !isDone && (
          <AuthInput
            control={control as unknown as Control<FieldValues>}
            placeholder={"נא להזין אימייל שאיתו נרשמת"}
            name="email"
            type="email"
            rules={{
              required: "פורמט שגוי",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "פורמט שגוי",
              },
            }}
          />
        )}
        {isSend && (
          <AuthInput
            control={control as unknown as Control<FieldValues>}
            name="code"
            type="number"
            rules={{
              required: "פורמט שגוי",
              minLength: {
                value: 6,
                message: "פורמט שגוי",
              },
              maxLength: {
                value: 6,
                message: "פורמט שגוי",
              },
            }}
            placeholder={"|"}
          />
        )}
        {isConfirmed && (
          <>
            <AuthInput
              control={control as unknown as Control<FieldValues>}
              name="password"
              type="password"
              rules={{
                required: "required",
                minLength: {
                  value: 3,
                  message: "פורמט שגוי",
                },
              }}
              placeholder={"סיסמה חדשה"}
            />
            <AuthInput
              control={control as unknown as Control<FieldValues>}
              placeholder={"חזור על סיסמה חדשה"}
              name="retryPassword"
              type="password"
              rules={{
                required: "פורמט שגוי",
                validate: (value: string) => {
                  if (value === password) {
                    return true;
                  } else {
                    return "פורמט שגוי";
                  }
                },
              }}
            />
          </>
        )}
        {isDone && (
          <p className={css.success}>
            הסיסמה שלך שונתה <Image src={keyIcon} alt="key icon" />
          </p>
        )}
        {isError.length > 0 && <p className={css.error}>{isError}</p>}
        <div className={css.button}>
          {isConfirmed && (
            <Button type="submit" disabled={!isValid}>
              התחברות
            </Button>
          )}
          {isDone && <Button onClick={done}>Done</Button>}
          {!isConfirmed && !isDone && (
            <Button
              onClick={send}
              disabled={
                errors.email?.message?.length
                  ? true
                  : false || getValues("email") === undefined
              }
            >
              בוצע
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AuthLogin;
