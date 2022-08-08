import React, { useState } from "react";
import style from "../assets/css/Help/Help.module.scss";
import { selectUser } from "../redux/slice/UserSlice";
import { useSelector } from "react-redux";
import Modal from "../components/Modal/Modal";
import ActivityItem from "../components/ActivityItem";

const helpContent = [
  {
    title: "[Renewal] My account page",
  },
  {
    title: "Can I combine/split my orders?",
  },
  {
    title: "Available Shipping method table by country",
  },
  {
    title: "My package looks like it's been damaged. What should I do?",
  },
  {
    title: "◆ About our Support Page ◆",
  },
  {
    title: "Revised Shipping fees for Japan Post, June 2022",
  },
];
const activityItems = [
  {
    date: 'July 2022',
    title: 'Notifaction regarding defect of RAIL-29557 and RAIL-29558',
    time_created: 1,
    comments: 0
  },
  {
    date: 'June 2022',
    title: 'Revised Shipping fees for Japan Post, June 2022',
    time_created: 2,
    comments: 4
  },
  {
    date: 'December 2020',
    title: 'Surface Parcel / Air Small Packet (Unregistered)',
    time_created: 2,
    comments: 16
  },

]

const Help: React.FC = () => {
  const [items, setItems] = useState(helpContent);
  const {  role } = useSelector(selectUser);
  const [value, setValue] = useState("");
  const [modalActive, setModalActive] = useState(false);

  const addTechPost = () => {
    setItems([
      ...items,
      {
        title: value,
      },
    ]);
    setModalActive(false);
    setValue("");
  };

  return (
    <div className={style.wrapper}>
      {role === 'ADMIN' ? (
        <button
          className={style.admin_button}
          onClick={() => setModalActive(true)}
        >
          Add new
        </button>
      ) : null}
      <div className={style.help_buttons}>
        <div className={style.help_buttons_section1}>
          <button>General Information</button>
          <button>Payment/Shipping</button>
          <button>Frequently Asked Questions</button>
        </div>
        <div className={style.help_buttons_section2}>
          <button>Important Announcements</button>
        </div>
      </div>
      <div className={style.help_content}>
        <h3 className={style.help_content_title}>Promoted articles</h3>
        <div className={style.help_content_menu}>
          <ul className={style.help_content_menu_items}>
            {items.map((item) => (
              <li className={style.help_content_menu_item}>
                <a href="http://localhost:3000/">{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
        <div className={style.activity}>
          <h3 className={style.activity_title}>Recent activity</h3>
          <div className={style.activity_content}>
            <div className={style.activity_post}>
              {activityItems.map(item =>
                  <ActivityItem  comments={item.comments} date={item.date} time_created={item.time_created} title={item.title}/>
              )}
            </div>
          </div>
        <Modal modalActive={modalActive} setModalActive={setModalActive}>
          <input
            className="border border-black outline-none mr-3 px-3 py-1"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="bg-black rounded-md text-white px-3 py-1"
            onClick={() => addTechPost()}
          >
            Add
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default Help;
