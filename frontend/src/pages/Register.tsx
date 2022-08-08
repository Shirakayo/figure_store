import React from 'react';
import style from "../assets/css/Login/Login.module.scss";
import RegisterForm from "../components/Forms/RegisterForm";
import {NavLink} from "react-router-dom";

const Register = () => {
    return (
        <div className={style["login-wrapper"]}>
            <div className={style["login-form"]}>
                <div className={style["form-title"]}>
                    Register
                </div>
                <div className={style["form"]}>
                    <RegisterForm />
                </div>
                <div className='text-gray-500'>
                    Already have an account? <NavLink className='text-blue-500' to='/login'>Log in</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Register;
