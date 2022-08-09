import React, { useEffect } from "react";
import { useAppDispatch } from "../redux/store";
import style from "../assets/css/Home/Home.module.scss";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchItems, selectItems } from "../redux/slice/ItemsSlice";
import { selectFilter } from "../redux/slice/ItemFilter";
import FullItem from "../components/Home/FullItem";
import InfoContent from "../components/Home/InfoContent/InfoContent";
import CategoryLine from "../components/Home/ContentTitle/ContentTitle";
import Loader from "../components/UI/loader/Loader";
import {authService} from "../redux/slice/UserSlice";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { newsItems, status } = useSelector(selectItems);
  const [searchParams, setSearchParams] = useSearchParams();
  const { search, category } = useSelector(selectFilter);

  const queryParams = searchParams.get("q");
  console.log(queryParams)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(authService())
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchItems({ search, category }));
  }, [search, category, dispatch]);

  useEffect(() => {
    setSearchParams({ q: search });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  if (status === "loading") {
    return <div className={style.loader}><Loader /></div>;
  }

  return (
    <main className={style.main}>
      <div className={style.wrapper}>
        <div className={style["content-wrapper"]}>
          <InfoContent newsItems={newsItems} />
          <CategoryLine category={category} />
          <div className={style.content}>
            <FullItem />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
