import React, {useMemo, useState} from "react";
import Logo from "./Logo/Logo";
import style from "./Header.module.scss";
import Input from "../UI/input/Input";
import MenuList from "./Menu/MenuList";
import Button from "../UI/button/Button";
import Select from "../UI/select/Select";
import Navigation from "./Navigation/Navigation";
import { selectSearch } from "../../redux/slice/ItemFilter";
import { useAppDispatch } from "../../redux/store";
import debounce from "lodash.debounce";

const Header: React.FC = () => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();

  const updateSearchValue = useMemo(
      () =>
    debounce((value: string) => {
      dispatch(selectSearch(value));
    }, 500),
    [dispatch]
  );

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (event.target.value.length === 0) {
      dispatch(selectSearch(""));
    }
  };

  const sendSearch = () => {
    updateSearchValue(value);
  };

  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <div className={style.logo}>
          <Logo />
        </div>
        <div className={style.search}>
          <Select />
          <Input
            placeholder="Search..."
            value={value}
            onChange={(event) => changeValue(event)}
          />
          <Button onClick={() => sendSearch()} height={18} width={20} />
        </div>
        <div className={style.menu}>
          <MenuList />
        </div>
      </header>
      <div className={style.nav}>
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
