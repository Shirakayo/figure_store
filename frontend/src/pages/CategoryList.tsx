import React from 'react';
import style from '../assets/css/CategoryList.module.scss'
import {NavLink} from "react-router-dom";
import {HOME_ROUTE} from '../utils/const';

const CategoryList: React.FC = () => {
    return (
        <div className={style.wrapper}>
            <h2 className={style.title}>Category List</h2>
            <div className={style.content}>
                <div className={style.category_block}>
                    <div className={style.category_block_title}>
                        <img className='w-7' src="https://img.amiami.com/images/genre/icon/1001.png" alt=""/>
                        <NavLink className='text-gray-500' to={HOME_ROUTE}>
                            Bishoujo Figures
                        </NavLink>
                    </div>
                    <ul className='ml-14 text-gray-500'>
                        <li>Completed Figures</li>
                        <li>Nendroid</li>
                        <li>Figma</li>
                        <li>Plastic kit / Plastic Models</li>
                        <li>Action Figures</li>
                        <li>Garage Kit</li>
                    </ul>
                </div>
                <div className={style.category_block}>
                    <div className={style.category_block_title}>
                        <img className='w-7' src="https://img.amiami.com/images/genre/icon/3006.png" alt=""/>
                        <NavLink className='text-gray-500' to={HOME_ROUTE}>
                            Tools / Paints / Material
                        </NavLink>
                    </div>
                    <ul className='ml-14 text-gray-500'>
                        <li>Paints / Solvent</li>
                        <li>Painting Tools</li>
                        <li>Adhesives / Putty</li>
                        <li>Polishing</li>
                        <li>Craft Tools</li>
                        <li>Material</li>
                        <li>Decal</li>
                        <li>Other</li>
                    </ul>
                </div>
                <div className={style.category_block}>
                    <div className={style.category_block_title}>
                        <img className='w-7' src="https://img.amiami.com/images/genre/icon/7001.png" alt=""/>
                        <NavLink className='text-gray-500' to={HOME_ROUTE}>
                            Card Games
                        </NavLink>
                    </div>
                    <ul className='ml-14 text-gray-500'>
                        <li>Yu-Gi-Oh!OCG</li>
                        <li>Pokemon Card Game</li>
                        <li >Magic: The Gathering</li>
                        <li >Weiss Schwarz</li>
                        <li>Battle Spirits</li>
                        <li>Lycee</li>
                        <li>Duel Masters</li>
                        <li>Cardfight!! Vanguard</li>
                        <li>Future Card Buddyfight</li>
                        <li>Precious Memories</li>
                        <li>WIXOSS TCG</li>
                        <li>Z/X -Zillions of enemy X- </li>
                        <li>TCG Fire Emblem Cipher</li>
                        <li>Monster Collection TCG</li>
                        <li>Arcade Card Related</li>
                        <li>Other</li>
                        <li>Single Cards</li>
                    </ul>
                </div>
                <div className={style.category_block}>
                    <div className={style.category_block_title}>
                        <img className='w-7' src="https://img.amiami.com/images/genre/icon/1001.png" alt=""/>
                        <NavLink className='text-gray-500' to={HOME_ROUTE}>
                            Bishoujo Figures
                        </NavLink>
                    </div>
                    <ul className='ml-14 text-gray-500'>
                        <li>Completed Figures</li>
                        <li>Nendroid</li>
                        <li>Figma</li>
                        <li>Plastic kit / Plastic Models</li>
                        <li>Action Figures</li>
                        <li>Garage Kit</li>
                    </ul>
                </div>
                <div className={style.category_block}>
                    <div className={style.category_block_title}>
                        <img className='w-7' src="https://img.amiami.com/images/genre/icon/7001.png" alt=""/>
                        <NavLink className='text-gray-500' to={HOME_ROUTE}>
                            Card Games
                        </NavLink>
                    </div>
                    <ul className='ml-14 text-gray-500'>
                        <li>Yu-Gi-Oh!OCG</li>
                        <li>Pokemon Card Game</li>
                        <li >Magic: The Gathering</li>
                        <li >Weiss Schwarz</li>
                        <li>Battle Spirits</li>
                        <li>Lycee</li>
                        <li>Duel Masters</li>
                        <li>Cardfight!! Vanguard</li>
                        <li>Future Card Buddyfight</li>
                        <li>Precious Memories</li>
                        <li>WIXOSS TCG</li>
                        <li>Z/X -Zillions of enemy X- </li>
                        <li>TCG Fire Emblem Cipher</li>
                        <li>Monster Collection TCG</li>
                        <li>Arcade Card Related</li>
                        <li>Other</li>
                        <li>Single Cards</li>
                    </ul>
                </div>
                <div className={style.category_block}>
                    <div className={style.category_block_title}>
                        <img className='w-7' src="https://img.amiami.com/images/genre/icon/1001.png" alt=""/>
                        <NavLink className='text-gray-500' to={HOME_ROUTE}>
                            Bishoujo Figures
                        </NavLink>
                    </div>
                    <ul className='ml-14 text-gray-500'>
                        <li>Completed Figures</li>
                        <li>Nendroid</li>
                        <li>Figma</li>
                        <li>Plastic kit / Plastic Models</li>
                        <li>Action Figures</li>
                        <li>Garage Kit</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CategoryList;
