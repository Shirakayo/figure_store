import React from 'react';
import {NavLink} from "react-router-dom";
import {CATEGORY_ROUTE, CONTACT_ROUTE, HELP_ROUTE} from "../../../utils/const";

const Navigation:React.FC = () => {
    return (
            <nav>
                <NavLink to={CATEGORY_ROUTE}>
                    Category List
                </NavLink>
                <NavLink to={HELP_ROUTE}>
                    Help
                </NavLink>
                <NavLink to={CONTACT_ROUTE}>
                    Contact Us
                </NavLink>
            </nav>
    );
};

export default Navigation;
