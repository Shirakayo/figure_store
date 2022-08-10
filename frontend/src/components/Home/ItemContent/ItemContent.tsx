import React, {useEffect} from 'react';
import style from "../../../assets/css/FullItem.module.scss";
import {IItemInfo} from "../../../types/StoreItem/store-item-type";
import ItemCard from "../ItemCard/ItemCard";
import {useSelector} from "react-redux";
import {fetchItems, selectItems} from "../../../redux/slice/ItemsSlice";
import {selectFilter} from "../../../redux/slice/ItemFilter";
import {useAppDispatch} from "../../../redux/store";
import Skeleton from "../../UI/skeleton/Skeleton";
import Loader from "../../UI/loader/Loader";

const ItemContent: React.FC= () => {
    const { items } = useSelector(selectItems);
    const { category, search } = useSelector(selectFilter);
    const dispatch = useAppDispatch()
    const { status } = useSelector(selectItems);


    useEffect(() => {
        dispatch(fetchItems({ search, category }));
    }, [ search, category, dispatch]);

    const skeleton = [...new Array(20)].map((_, index) => (
        <Skeleton key={index} />
    ));


    if (status === "loading") {
        return <div className={style.loader}><Loader /></div>;
    }

    return (
        <div className={style.content_wrapper}>
            {items.length > 0 ? items.map((item: IItemInfo) => <ItemCard key={item.id} item={item} />) : skeleton}
        </div>
    );
};

export default ItemContent;
