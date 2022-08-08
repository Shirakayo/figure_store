import React, {FC} from 'react';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import {NavLink} from "react-router-dom";
import {HOME_ROUTE} from "../utils/const";

interface ActivityItemsProps {
    time_created: number;
    title: string;
    date: string;
    comments: number;
}

const ActivityItem:FC<ActivityItemsProps> = ({time_created, title, date, comments}) => {
    return (
      <div className='flex justify-between border-b border-gray-300 w-full items-center py-5'>
        <div>
          <h4 className='text-lg'>{date}</h4>
          <NavLink to={HOME_ROUTE} className='text-sm'>{title}</NavLink>
        </div>
        <div className='self-end'>
          <small className='mr-4 text-gray-500'>{`Article created ${time_created} month ago`}</small>
          <span className='text-xs'><ModeCommentIcon style={{backgroundColor: 'transparent', marginRight: '5px'}} fontSize='small'/>{comments}</span>
        </div>
      </div>
    );
};

export default ActivityItem;
