import React, {useCallback} from "react";
import style from "../../../assets/css/Home/Home.module.scss";
import {useDispatch} from "react-redux";
import {selectCategory} from "../../../redux/slice/ItemFilter";
import { useLocation } from "react-router-dom";
import { HOME_ROUTE } from "../../../utils/const";
import {ICategoryProps} from "../../../types/StoreItem/store-item-type";

const filterList = [
  "All Items",
  "Bishoujo",
  "Popular with Boys",
  "Popular with Girls",
  "News",
];

const CategoryLine: React.FC<ICategoryProps> = ({category}) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const changeCategory = useCallback(
      (index: number) => {
        dispatch(selectCategory(index))
      },
      [dispatch],
  );


  return (
    <>
      {(location.search === "?q=" || location.pathname === HOME_ROUTE)  ? (
        <ul className={style.title}>
          {filterList.map((item, index) => (
            <li
              onClick={() => changeCategory(index)}
              className={
                index === category
                  ? "border-b-4  border-solid border-orange-500"
                  : ""
              }
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      ): <h2 className={style.itemfind}>Item List</h2>}

    </>
  );
};

export default CategoryLine;
