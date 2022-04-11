import React, { useRef , useState } from 'react';
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
import {useMessageState} from '../../store/useStore'
init("3gDf3miygSI6Y-fBg");
const Contact = () => {
    const setIsMessageSent = useMessageState(state => state.setIsMessageSent)
    const form = useRef();
    const name = useRef();
    const email = useRef();
    const message = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const nameValue = name.current.value
        const emailValue = email.current.value
        const messageValue = message.current.value
        
        if (!nameValue || !emailValue || !messageValue) {
            return
        }

        name.current.value = ''
        email.current.value = ''
        message.current.value = ''

        emailjs.sendForm('service_5n2kaml', 'template_rd8anwh', form.current, `3gDf3miygSI6Y-fBg`)
        .then((result) => {
            setIsMessageSent()
            setTimeout(() => {
                setIsMessageSent()
            }, 2000)
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <section className="selected-works w-full py-36 flex items-center justify-center px-0 sm:px-6">
            <div className="relative content m-auto mt-4 md:mt-0 w-full md:w-[600px]">
                <div className="title mb-10 text-6xl text-center">Contact Me</div>
                <div className="p-10 rounded-md bg-white">
                    <form ref={form} onSubmit={sendEmail} className="">
                        <div className="form flex flex-col mb-5">
                            <label className="mb-2 text-xl">Name</label>
                            <input ref={name} required type="text" name="user_name" className="font-sans bg-slate-200 w-full py-2 px-2 text-base rounded-sm outline-none border-none focus:ring-2 focus:ring-orange"/>
                        </div>
                        <div className="form flex flex-col mb-5">
                            <label className="mb-2 text-xl">Email</label>
                            <input ref={email} required type="email" name="user_email" className="font-sans bg-slate-200 w-full py-2 px-2 text-base rounded-sm outline-none border-none focus:ring-2 focus:ring-orange"/>
                        </div>
                        <div className="form flex flex-col mb-10">
                            <label className="mb-2 text-xl">Message</label>
                            <textarea ref={message} required name="message" className="font-sans bg-slate-200 w-full py-2 px-2 text-base rounded-sm outline-none border-none focus:ring-2 focus:ring-orange"/>
                        </div>
                        <input type="submit" value="Send" className="bg-darkBlue text-white text-xl py-4 rounded-md cursor-pointer active:ring-2 active:ring-orange text-center block w-full"/>
                    </form>
                </div>
                <div className="text-right mt-4 pr-4 sm:pr-0">Powered by: Email JS</div>
                
            </div>
        </section>
    );
};

export default Contact