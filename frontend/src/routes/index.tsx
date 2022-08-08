import React from 'react';
import {Route, Routes} from "react-router-dom";
import {
    ADMIN_ROUTE, CART_ROUTE,
    CATEGORY_ROUTE,
    CONTACT_ROUTE,
    FIGURE_ROUTE,
    HELP_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    REGISTER_ROUTE,
} from "../utils/const";
import Home from "../pages/Home";
import Login from "../pages/Login";
import CategoryList from "../pages/CategoryList";
import Help from "../pages/Help";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import FullItemInfo from "../components/Home/FullItemInfo/FullItemInfo";
import AdminPanel from "../pages/AdminPanel";
import Cart from "../pages/Cart";

const AppRouting:React.FC = () => {
    return (
        <Routes>
            <Route path={HOME_ROUTE} element={<Home />}/>
            <Route path={LOGIN_ROUTE} element={<Login />}/>
            <Route path={ADMIN_ROUTE} element={<AdminPanel />}/>
            <Route path={CART_ROUTE} element={<Cart />}/>
            <Route path={REGISTER_ROUTE} element={<Register />}/>
            <Route path={FIGURE_ROUTE} element={<FullItemInfo />}/>
            <Route path={CATEGORY_ROUTE} element={<CategoryList />}/>
            <Route path={HELP_ROUTE} element={<Help />}/>
            <Route path={CONTACT_ROUTE} element={<Contact />}/>
        </Routes>
    );
};

export default AppRouting;
