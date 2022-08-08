import React from 'react';
import style from './DropDown.module.scss'
import {NavLink} from "react-router-dom";

interface IModalProps {
	dropDownVisible: boolean;
	setDropDownVisible: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const dropDownItems = [
	{
		image: 'https://img.amiami.com/images/genre/icon/1001.png',
		title: 'Bishoujo Figures',
		url: '/bishoujo'
	},
	{
		image: 'https://img.amiami.com/images/genre/icon/1002.png',
		title: 'Character Figures',
		url: '/characterfigure'
	},
	{
		image: 'https://img.amiami.com/images/genre/icon/1003.png',
		title: 'Foreign Figures',
		url: '/foreignfigure'
	},
	{
		image: 'https://img.amiami.com/images/genre/icon/1004.png',
		title: 'Dolls',
		url: '/dolls'
	}
]


const DropDown: React.FC<IModalProps> = ({dropDownVisible, setDropDownVisible}) => {
	return (
		<div>
			{dropDownVisible ?
				<div onMouseLeave={() => setDropDownVisible(false)} className={style.dropdown}>
					<div className={style.dropdown_content}>
						<ul>
							{dropDownItems.map(item =>
								<NavLink to={item.url}>
									<li className={style.list_item}>
										<img className={style.image} src={item.image} alt=""/>
										{item.title}
									</li>
								</NavLink>
							)}
						</ul>
					</div>
					<div className={style.dropdown_image}>
						<img src="https://img.amiami.com/images/genre/bg/1001.png" alt=""/>
					</div>
				</div> : ''}
		</div>
	);
};

export default DropDown;
