import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IShippingField } from "../../types/app.interface";
import style from "./LoginForm.module.scss";
import { useAppDispatch } from "../../redux/store";
import { fetchRegistration } from "../../redux/slice/UserSlice";
import { useNavigate } from "react-router-dom";

const RegisterForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IShippingField>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IShippingField> = (data) => {
    dispatch(fetchRegistration(data));
    reset();
    setTimeout(() => navigate("/login"), 3000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={style["login-input-wrapper"]}>
        <label htmlFor="email-input">E-mail address</label>
        <input
          className={style["login-input"]}
          id="email-input"
          placeholder="Enter your email.."
          {...register("email", {
            required: "Please enter your e-mail address.",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "The e-mail address you entered is invalid.",
            },
          })}
          type="email"
        />
        <div>
          {errors?.email && (
            <div className="text-red-800">{errors.email?.message}</div>
          )}
        </div>
      </div>
      <div className={style["login-input-wrapper"]}>
        <label htmlFor="password-input">Password</label>
        <input
          className={style["login-input"]}
          id="password-input"
          placeholder="Enter your password.."
          {...register("password", {
            required: "Please enter your password.",
            pattern: {
              value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
              message:
                "The password you have entered is too short. Please enter a minimum of 6 characters.",
            },
          })}
          type="password"
        />
        <small className="text-gray-500">
          6 to 32 letters(A-Z, a-z) and numbers(0-9)
        </small>
        <div>
          {errors?.password && (
            <div className="text-red-800">{errors.password?.message}</div>
          )}
        </div>
      </div>
      <div className={style["form-button"]}>
        <button>Register</button>
      </div>
    </form>
  );
};

export default RegisterForm;
