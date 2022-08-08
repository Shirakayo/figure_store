import React, {useState} from 'react';
import style from "../../../assets/css/Home/Home.module.scss";
import AsideItem from "./AsideItem";
import {NavLink, useLocation} from "react-router-dom";
import {CATEGORY_ROUTE, HOME_ROUTE} from "../../../utils/const";
import DropDown from "../../DropDown/DropDown";
import {useSelector} from "react-redux";
import {selectItems} from "../../../redux/slice/ItemsSlice";



const Aside: React.FC = () => {
    const { asideItems } = useSelector(selectItems);
    const [dropDownVisible, setDropDownVisible] = useState<boolean>(false);
    const location = useLocation()



    return (
        <aside className={location.pathname === HOME_ROUTE ? style.aside : style.disable}>
            <div className={style.aside_content}>
                <ul className={style.list}>
                    {asideItems.map((item) => (
                        <AsideItem
                            image={item.image}
                            title={item.title}
                            setDropDownVisible={setDropDownVisible}
                        />
                    ))}
                    <li className={style.list_link}>
                        <NavLink to={CATEGORY_ROUTE}>Show All Categories</NavLink>
                    </li>
                    <div
                        className={dropDownVisible ? style.aside_dropdown : style.disable}
                    >
                        <DropDown
                            dropDownVisible={dropDownVisible}
                            setDropDownVisible={setDropDownVisible}
                        />
                    </div>
                </ul>
                <ul className={style.aside_sublist}>
                    <li>Ranking</li>
                    <li>New Products</li>
                </ul>
            </div>
        </aside>
    );
};

export default Aside;
