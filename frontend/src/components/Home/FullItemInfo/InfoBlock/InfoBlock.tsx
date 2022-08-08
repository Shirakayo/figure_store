import React from "react";
import style from "../FullItemInfo.module.scss";
import { IItemInfo } from "../../../../types/StoreItem/store-item-type";

interface IPropsItemInfo {
  itemInfo: IItemInfo;
  addItemToCart: () => void
}

const InfoBlock: React.FC<IPropsItemInfo> = ({ itemInfo, addItemToCart }) => {
  return (
    <div>
      <div className={style.information}>
        <div className={style.information_status}>
          <span>{itemInfo?.status}</span>
        </div>
        <h2 className={style.information_title}>{itemInfo?.fullName}</h2>
        <h3 className={style.information_jptitle}>{itemInfo?.jp_name}</h3>
        <small className={style.information_company}>{itemInfo?.company}</small>
        <div className={style.information_price}>
          {itemInfo?.price.jp_price}
          <span>JPY</span>
        </div>
        <div className={style.information_convertprice}>
          (appx. {itemInfo?.price.jp_price})
          <select>
            <option value="usd">USD</option>
            <option value="aud">AUD</option>
            <option value="cad">CAD</option>
            <option value="krw">KRW</option>
          </select>
          )
        </div>
        <div className={style.information_release}>
          <span>{itemInfo?.status}</span> (Release Date:{" "}
          {itemInfo?.release_date})
        </div>
        <div className="flex ">
          <select className={style.information_quantity} name="quantity" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <div className={style.information_button}>
            <button onClick={() => addItemToCart()} className={style.information_button}>
              <img
                src="https://www.amiami.com/images/common/icon_cart_white.png"
                alt=""
              />
              Pre-order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;
