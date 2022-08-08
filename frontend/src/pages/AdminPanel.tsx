import React, { useState } from "react";
import style from "../assets/css/AdminPanel/AdminPanel.module.scss";
import { selectUser } from "../redux/slice/UserSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddFigureForm from "../components/Forms/AdminPanel/AddFigure/AddFigureForm";
import DeleteFigureForm from "../components/Forms/AdminPanel/DeleteFigure/DeleteFigureForm";

const AdminPanel: React.FC = () => {
  const { isAuth } = useSelector(selectUser);
  const [modalActive, setModalActive] = useState(false);
  const [deleteModalActive, setDeleteModalActive] = useState(false);
  const navigate = useNavigate();

  if (!isAuth) {
    navigate("/");
  }

  return (
    <div className={style.wrapper}>
      <h2 className="text-2xl pt-10 text-orange-500 mb-10 text-center">
        Welcome to the job, admin 👹
      </h2>
      <div className={style.content}>
        <div className="flex items-center justify-center text-2xl font-bold gap-5 mb-10">
          Add a figure to the store
          <button
            onClick={() => setModalActive(true)}
            className="border-black border-2 p-1 px-5 hover:bg-amber-500 transition "
          >
            Add figure
          </button>
        </div>
        <div className="flex items-center justify-center text-2xl font-bold gap-5 mb-10">
          Remove a figure from the store
          <button
              onClick={() => setDeleteModalActive(true)}
              className="border-black border-2 p-1 px-5 hover:bg-amber-500 transition ">
            Remove figure
          </button>
        </div>
        <div className="flex items-center justify-center text-2xl font-bold gap-5 mb-10 z-5">
          Add news to the newsfeed
          <button className="border-black border-2 p-1 px-5 hover:bg-amber-500 transition ">
            Add news
          </button>
        </div>
        <AddFigureForm  modalActive={modalActive} setModalActive={setModalActive}/>
        <DeleteFigureForm  modalActive={deleteModalActive} setModalActive={setDeleteModalActive}/>
      </div>
    </div>
  );
};

export default AdminPanel;
