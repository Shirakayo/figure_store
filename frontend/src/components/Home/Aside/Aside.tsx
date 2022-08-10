import React, {useEffect, useRef, useState} from 'react';
import style from "../../../assets/css/Home/Home.module.scss";
import AsideItem from "./AsideItem";
import {NavLink, useLocation} from "react-router-dom";
import {CATEGORY_ROUTE, HOME_ROUTE} from "../../../utils/const";
import DropDown from "../../DropDown/DropDown";
import {useSelector} from "react-redux";
import {selectItems} from "../../../redux/slice/ItemsSlice";


const Aside: React.FC = () => {
    const {asideItems} = useSelector(selectItems);
    const [dropDownVisible, setDropDownVisible] = useState<boolean>(false);
    const location = useLocation()
    const ref = useRef<HTMLUListElement>(null)



    useEffect(() => {
        const checkClickOutside = (e: any) => {
            if (dropDownVisible && ref.current && !ref.current.contains(e.target)) {
                setDropDownVisible(false)
            }
        }
        document.addEventListener("mousedown", checkClickOutside)
        return () => {
            document.removeEventListener("mousedown", checkClickOutside)
        }
    }, [dropDownVisible])


    return (
        <aside className={location.pathname === HOME_ROUTE || location.pathname === CATEGORY_ROUTE ? style.aside : style.disable}>
            <div className={style.aside_content}>
                <ul ref={ref} className={style.list}>
                    {asideItems.map((item) => (
                        <AsideItem
                            key={item.title}
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
            <div className={style.social}>
                <a className={style.social_facebook}  href="https://www.facebook.com/AmiAmiEnglish/" rel="noreferrer" target={'_blank'}>AmiAmi Facebook</a>
                <a className={style.social_twitter} href="https://twitter.com/amiami_english/" rel="noreferrer" target={'_blank'}>AmiAmi Twitter</a>
                <a className={style.social_twitter_korean} href="https://twitter.com/AmiAmi_Korea" rel="noreferrer" target={'_blank'}> AmiAmi Twitter Korean</a>
                <a className={style.social_china} href="https://www.weibo.com/amiamichina/" rel="noreferrer" target={'_blank'}>amiami china</a>
                <a className={style.social_instagram} href="https://www.instagram.com/amiami_global" rel="noreferrer" target={'_blank'}>amiami instagram</a>
            </div>
        </aside>
    );
};

export default Aside;
