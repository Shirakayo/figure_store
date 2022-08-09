import React from 'react';
import style from '../assets/css/Contact.module.scss'

const Contact:React.FC = () => {
    return (
        <div className={style.wrapper}>
            <h2 className={style.title}>Submit a request</h2>
            <form className={style.form}>
                <div className='flex flex-col mb-8'>
                    <label className={style.important_label} htmlFor="request_input">Your email address</label>
                    <input id='request_input' className={style.form_input} type="text"/>
                </div>
                <div className='flex flex-col mb-8'>
                    <label className={style.important_label} htmlFor="request_input">Subject</label>
                    <input id='request_input' className={style.form_input} type="text"/>
                </div>
                <div className='flex flex-col mb-4'>
                    <label className={style.important_label} htmlFor="request_textarea">Description</label>
                    <textarea id='request_textarea' className={style.form_textarea}/>
                </div>
                <div className='flex flex-col mb-8'>
                    <label className={style.order_label} htmlFor="request_order">Order number</label>
                    <input id='request_order' className={style.form_input} type="number"/>
                    <small className='text-xs text-gray-500'>Enter 9 digit order number or leave blank</small>
                </div>
                <div className='flex flex-col mb-10'>
                    <p className={style.attachments_title}>Attachments</p>
                    <label className={style.attachments_label}>
                        <input multiple={true} className={style.form_input_file} type="file" />
                        <div className={style.attachments_label_content}><span>Add file</span> or drop file here</div>
                    </label>
                </div>
                <div className='py-10'>
                    <button className={style.form_button}>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
