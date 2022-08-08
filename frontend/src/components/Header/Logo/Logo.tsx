import React from 'react';
import style from './Logo.module.scss'
import {NavLink} from "react-router-dom";


const Logo: React.FC = () => {
    return (
        <NavLink to='/'>
            <img className={style.logo} src="https://www.amiami.com/images/common/site_logo.png" alt="logo"/>
        </NavLink>
    );
};

export default Logo;
