import React from 'react';
import style from './Select.module.scss'

const Select: React.FC = () => {
    return (
        <select className={style.select} name="category" id="category-select">
            <option value="All">All</option>
            <option value="All">Figures Categories</option>
            <option value="All">Bishoujo Categories</option>
            <option value="All">Character Categories</option>
        </select>
    );
};

export default Select;
