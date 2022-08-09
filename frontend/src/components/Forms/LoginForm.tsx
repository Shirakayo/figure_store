import React, {useEffect, useState} from "react";
import style from "./LoginForm.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { IShippingField } from "../../types/app.interface";
import {useAppDispatch} from "../../redux/store";
import {fetchLogin, loginSuccess, selectStatus} from "../../redux/slice/UserSlice";
import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import ReCAPTCHA from "react-google-recaptcha";

const LoginForm: React.FC = () => {
  const [verified, setVerified] = useState(false);
  const status = useSelector(selectStatus)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IShippingField>({
    mode: "onChange",
  });


  const onSubmit: SubmitHandler<IShippingField> = (data) => {
    dispatch(fetchLogin(data))
  }


  useEffect(() => {
    if (status === 'SUCCESS') {
      dispatch(loginSuccess())
      navigate('/')
      reset()
    }
    if (status === 'ERROR') {
      alert('Incorrect login or password. Try again')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])
  

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
            <div className='text-red-800'>{errors.email?.message}</div>
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
        <small className='text-gray-500'>
          6 to 32 letters(A-Z, a-z) and numbers(0-9)
        </small>
        <div>
          {errors?.password && (
            <div className='text-red-800'>{errors.password?.message}</div>
          )}
        </div>
      </div>
      <ReCAPTCHA
        className={style.recaptcha}
        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
        onChange={() => setVerified(true)}
      />,
      <div className={verified ? style["form-button"] : style.disable}>
        <button disabled={!verified}>Log in</button>
      </div>
    </form>
  );
};

export default LoginForm;
