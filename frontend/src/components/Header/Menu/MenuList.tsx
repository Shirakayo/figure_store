import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { NavLink } from "react-router-dom";
import {ADMIN_ROUTE, CART_ROUTE, LOGIN_ROUTE} from "../../../utils/const";
import style from "./MenuList.module.scss";
import LanguageIcon from "@mui/icons-material/Language";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useSelector } from "react-redux";
import { logout, selectUser} from "../../../redux/slice/UserSlice";
import {useAppDispatch } from "../../../redux/store";
import {selectCartItem} from "../../../redux/slice/CartSlice";

const MenuList: React.FC = () => {
  const {isAuth, role} = useSelector(selectUser);
  const { items } = useSelector(selectCartItem);
  const dispatch = useAppDispatch();

  console.log(items.length);



  return (
    <div className={style["header__menu-wrapper"]}>
        {role === 'ADMIN' &&
            <NavLink to={ADMIN_ROUTE} className={`${style["header__menu-item"]}}`}>
                <AdminPanelSettingsIcon fontSize='large' className={style.icon} />
                <p className={style["icon-title"]}>Admin</p>
            </NavLink>
        }
      <div
        className={`${style["header__menu-item"]} ${style["item-language"]}`}
      >
        <LanguageIcon fontSize="large" className={style.icon} />
        <p className={style["icon-title"]}>Language</p>
      </div>
      <NavLink
        onClick={() => dispatch(logout())}
        className={style["header__menu-item"]}
        to={isAuth ? "" : LOGIN_ROUTE}
      >
        <PersonIcon fontSize="large" className={style.icon} />
        <p className={style["icon-title"]}>
          {isAuth ? "Logout" : "Login"}
        </p>
      </NavLink>
      <NavLink className={style["header__menu-item-cart"]} to={CART_ROUTE}>
        <ShoppingCartIcon fontSize="large" className={style.icon} />
        <p className={style["icon-title"]}>Cart</p>
          {items.length > 0 && <span className={style["item-cart-badge"]}>{items.length}</span>}
      </NavLink>
    </div>
  );
};

export default MenuList;
