import React from 'react';
import style from './ContentLayout.module.scss'

interface ContentLayoutProps {
    children: React.ReactNode
}

const ContentLayout:React.FC<ContentLayoutProps> = ({children}) => {
    return (
        <div className={style.wrapper}>
            {children}
        </div>
    );
};

export default ContentLayout;
