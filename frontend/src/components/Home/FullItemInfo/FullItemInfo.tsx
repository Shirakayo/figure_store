import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../../utils/const";
import { IItemInfo } from "../../../types/StoreItem/store-item-type";
import style from "./FullItemInfo.module.scss";
import InfoBlock from "./InfoBlock/InfoBlock";
import {useAppDispatch} from "../../../redux/store";
import {addCartItem} from "../../../redux/slice/CartSlice";

const FullItemInfo: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const [itemInfo, setItemInfo] = useState<IItemInfo>();


  const addItemToCart = () => {
    const item = {
      name: itemInfo?.fullName,
      release_date: itemInfo?.release_date,
      price: itemInfo?.price,
      count: 0
    }
    // @ts-ignore
    dispatch(addCartItem(item))
  }


  useEffect(() => {
    const fetchItemInfo = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/${id}`);
        setItemInfo(data);
      } catch (e) {
        console.log(e);
        navigate("/");
      }
    };
    fetchItemInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!itemInfo) {
    return (
      <div className="flex items-center justify-center h-full">
        <img
          src="https://c.tenor.com/hQMGiaJAkXoAAAAC/poputepipikku-pop-team-epic.gif"
          alt=""
        />
      </div>
    );
  }

  return (
    <div className={style.wrapper}>
      <div className={style.aside}>
        <h2 className={style.aside_category}>
          Category:
          <NavLink to="CATEGORY_ROUTE">
            {itemInfo?.category === "1"
              ? "Bishoujo Figures"
              : "Foreign Figures"}
          </NavLink>
        </h2>
        <div className={style.aside_back}>
          <NavLink to="/">Back to shop</NavLink>
        </div>
      </div>
      <div className={style.wrapper_info}>
        <div className={style.image}>
          <img src={itemInfo?.imageUrl} alt="" />
        </div>
        <InfoBlock addItemToCart={addItemToCart} itemInfo={itemInfo} />
      </div>
    </div>
  );
};

export default FullItemInfo;
