import React from 'react';
import {NavLink} from "react-router-dom";
import {IItemsProps} from "../../../types/StoreItem/store-item-type";
import style from './ItemCard.module.scss'

const ItemCard: React.FC<IItemsProps> = ({item}) => {
	
	return (
		<NavLink className={style.item} to={`/figures/${item.id}`}>
			<img className={style.item_image} src={item.imageUrl} alt=""/>
			<ul className={style.item_status}>
				<li>{item.status}</li>
			</ul>
			<p className={style.item_title}>{item.name}</p>
			<p className={style.item_price}>
				{item.price.jp_price}
				<span>JPY</span>
			</p>
		</NavLink>
	);
};

export default ItemCard;
