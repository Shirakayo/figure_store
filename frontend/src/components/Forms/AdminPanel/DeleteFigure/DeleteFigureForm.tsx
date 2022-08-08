import React from "react";
import { TextField } from "@mui/material";
import Modal from "../../../Modal/Modal";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../../../redux/store";
import style from "../AddFigure/AddFigureForm.module.scss";
import {deleteItems, selectItems} from "../../../../redux/slice/ItemsSlice";
import {useSelector} from "react-redux";

interface ModalProps {
  modalActive: boolean;
  setModalActive: (arg1: boolean) => void;
}

interface DeleteData {
  name: string
}

const DeleteFigureForm: React.FC<ModalProps> = ({
  modalActive,
  setModalActive,
}) => {
  const dispatch = useAppDispatch();
  const {items} = useSelector(selectItems)
  const { handleSubmit, reset, register } = useForm<DeleteData>({
    mode: "onChange",
  });
  
  const fetchDeleteItems = (name: string) => {
    const figure = items.find((item: { fullName: string }) => name === item.fullName);
    if (figure) {
      const {id} = figure
      dispatch(deleteItems(id))
    }
  }

  const onSubmit:SubmitHandler<DeleteData> = (data) => {
    fetchDeleteItems(data.name)
    reset();
    setModalActive(false);
  };


  return (
    <Modal modalActive={modalActive} setModalActive={setModalActive}>
      <form className={style.modal_form}
            onSubmit={handleSubmit(onSubmit)}>
        <h2 className="w-full text-center text-3xl font-bold mb-10">
          Write a name to delete
        </h2>
        <TextField
          type="text"
          {...register("name", { required: true })}
          label="Enter full-name"
        />
        <button type="submit" className="bg-orange-500 py-2 px-20 text-white">
          Delete Figure
        </button>
      </form>
    </Modal>
  );
};

export default DeleteFigureForm;
