import React from "react";
import {TextField} from "@mui/material";
import Modal from "../../../Modal/Modal";
import { IItemInfo } from "../../../../types/StoreItem/store-item-type";
import { addItems } from "../../../../redux/slice/ItemsSlice";
import { SubmitHandler, useForm } from "react-hook-form";
import {useAppDispatch} from "../../../../redux/store";
import style from './AddFigureForm.module.scss'

interface ModalProps {
  modalActive: boolean;
  setModalActive: (arg1: boolean) => void
}

const AddFigureForm: React.FC<ModalProps> = ({modalActive, setModalActive}) => {
  const dispatch = useAppDispatch();
  const { handleSubmit, reset, register } = useForm<IItemInfo>({
    mode: "onChange",
  });

  const fetchNewItem = ({id, name, fullName, jp_name, imageUrl, category, company, status, price,
  }: IItemInfo) => {
    const item = {
      id: id,
      name: name,
      fullName: fullName,
      jp_name: jp_name,
      imageUrl: imageUrl,
      category: category,
      company: company,
      status: status,
      release_date: "Dec-2022",
      price: price
    };

    dispatch(addItems(item));
  };

  const onSubmit: SubmitHandler<IItemInfo> = (data) => {
    fetchNewItem(data);
    reset()
    setModalActive(false);
  };

  return (
    <Modal modalActive={modalActive} setModalActive={setModalActive}>
      <form
          className={style.modal_form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="w-full text-center text-3xl font-bold pb-3">
          Enter the data into the form
        </h2>
        <TextField
          type="text"
          {...register("id", { required: true })}
          label="ID"
        />
        <TextField
          type="text"
          {...register("name", { required: true })}
          label="Enter name"
        />
        <TextField
          type="text"
          {...register("fullName")}
          label="Enter full-name"
        />
        <TextField
          type="text"
          {...register("jp_name")}
          label="Enter jp-name"
        />
        <TextField
          type="text"
          {...register("imageUrl", { required: true })}
          label="Enter image-url"
        />
        <TextField
          type="text"
          {...register("company", { required: true })}
          label="Enter company"
        />
        <TextField
          type="text"
          {...register("status", { required: true })}
          label="Enter status"
        />
        <TextField
          type="text"
          {...register("release_date", { required: true })}
          label="Enter release-date"
        />
        <TextField
          type="number"
          {...register("price", { required: true })}
          label="Enter price"
        />
        <TextField
          type="text"
          {...register("category", { required: true })}
          label="Enter category"
        />
        <button type='submit' className="bg-orange-500 py-2 px-20 text-white">
          Add Figure
        </button>
      </form>
    </Modal>
  );
};

export default AddFigureForm;
