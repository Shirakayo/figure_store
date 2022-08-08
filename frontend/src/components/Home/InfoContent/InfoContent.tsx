import React from "react";
import style from "../../../assets/css/Home/Home.module.scss";
import MySwiper from "../../UI/swiper/Swiper";
import NewsItem from "./News/NewsItem";
import { useLocation } from "react-router-dom";
import { INewsProps } from "../../../types/Home/home-types";
import { HOME_ROUTE } from "../../../utils/const";

const InfoContent: React.FC<INewsProps> = React.memo(({ newsItems }) => {
  const location = useLocation();
  return (
    <>
      {(location.search === "?q=" || location.pathname === HOME_ROUTE) && (
        <div>
          <div className={style["content-swiper"]}>
            <MySwiper />
            <div className="my-custom-pagination-div"></div>
          </div>
          <div className={style["content-important"]}>
            <NewsItem newsList={newsItems} />
          </div>
        </div>
      )}
    </>
  );
});

export default InfoContent;
