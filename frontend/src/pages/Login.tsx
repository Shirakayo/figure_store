import React from "react";
import style from "../assets/css/Login/Login.module.scss";
import LoginForm from "../components/Forms/LoginForm";
import {useNavigate} from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate()


  return (
    <div className={style["login-wrapper"]}>
      <div className={style["login-form"]}>
        <div className={style["form-title"]}>
          Log in
        </div>
        <div className={style["form"]}>
          <LoginForm />
        </div>
        <div className={style["register-link"]}>
          <p>New to AmiAmi?</p>
          <button onClick={() => navigate('/register')}>Create an AmiAmi Account</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
