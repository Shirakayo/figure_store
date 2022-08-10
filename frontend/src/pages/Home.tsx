import React, { useEffect } from "react";
import style from "../assets/css/Home/Home.module.scss";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectItems } from "../redux/slice/ItemsSlice";
import { selectFilter } from "../redux/slice/ItemFilter";
import FullItem from "../components/Home/FullItem";
import InfoContent from "../components/Home/InfoContent/InfoContent";

const Home: React.FC = () => {
  const { newsItems } = useSelector(selectItems);
  const [searchParams, setSearchParams] = useSearchParams();
  const { search } = useSelector(selectFilter);


  const queryParams = searchParams.get("q");
  console.log(queryParams)

  useEffect(() => {
    setSearchParams({ q: search });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <main className={style.main}>
      <div className={style.wrapper}>
        <div className={style["content-wrapper"]}>
          <InfoContent newsItems={newsItems} />
          <div className={style.content}>
            <FullItem />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
