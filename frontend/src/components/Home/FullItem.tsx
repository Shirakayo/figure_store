import React from 'react';
import ItemCard from "./ItemCard/ItemCard";
import {useSelector} from "react-redux";
import {selectItems} from "../../redux/slice/ItemsSlice";
import Skeleton from "../UI/skeleton/Skeleton";

const FullItem:React.FC = () => {
    const { items } = useSelector(selectItems);

    const skeleton = [...new Array(20)].map((_, index) => (
        <Skeleton key={index} />
    ));
    return (
        <>
            {items.length > 0 ? items.map((item) => <ItemCard item={item} />) : skeleton}
        </>
    );
};

export default FullItem;
