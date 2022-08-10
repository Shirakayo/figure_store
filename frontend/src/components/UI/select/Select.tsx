import React from 'react';
import style from './Select.module.scss'

const Select: React.FC = () => {
    return (
        <select className={style.select} name="category" id="category-select">
            <option value="All">All</option>
            <option value="Figures">Figures Categories</option>
            <option value="Bishoujo">Bishoujo Categories</option>
            <option value="Character">Character Categories</option>
        </select>
    );
};

export default Select;
