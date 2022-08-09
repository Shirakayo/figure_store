import React from 'react';
import {IListProps} from "../../../types/Home/home-types";
import style from '../SortItem.module.scss'

const AsideItem: React.FC<IListProps> = (props) => {
    return (
        <>
            <li onMouseEnter={() => props.setDropDownVisible(true)} className='flex gap-3 items-center cursor-pointer'>
                <img className={style.image} src={props.image} alt=""/>
                {props.title}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
            </li>
        </>
    );
};

export default AsideItem;
