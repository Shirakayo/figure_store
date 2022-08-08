import React from 'react';
import { motion  } from "framer-motion";
import girl1 from '../../../assets/image/index.png'
import girl2 from '../../../assets/image/index2.png'
import girl3 from '../../../assets/image/index3.png'
import style from './Loader.module.scss'


const Loader: React.FC = () => {
    return (
        <div>
            <div className={style.images}>
                <motion.img
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        delay: 1,
                        ease: 'easeInOut'
                    }}
                    animate={{
                        y: [0, -50, 0]
                    }}
                    src={girl1} alt=""/>
                <motion.img
                    transition={{
                        repeat: Infinity,
                        delay: 2,
                        duration: 2,
                        ease: 'easeInOut'
                    }}
                    animate={{
                        y: [0, -50, 0]
                    }}
                    src={girl2}
                    alt=""/>
                <motion.img
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        delay: 3,
                        ease: 'easeInOut'
                    }}
                    animate={{
                        y: [0, -50, 0]
                    }}
                    src={girl3} alt=""/>
            </div>
            <p className='flex justify-center'>Loading...</p>
        </div>
    );
};

export default Loader;
