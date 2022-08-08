import React from 'react';
import style from './Layout.module.scss'

interface ILayoutProps {
    children: React.ReactNode
}

const Layout:React.FC<ILayoutProps> = ({children}) => {
    return (
        <div className={style.wrapper}>
            {children}
        </div>
    );
};

export default Layout;
