import { useState } from "react";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Head from 'next/head';
const Contact = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        project: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const handleChange = (e) => {
        setValues((prev) => ({
            ...prev, 
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = document.getElementById("form-contact");
        const formValues = new FormData(e.target);
        setSubmitted(true)
        const data = await fetch(form.action, {
            method: form.method,
            body: formValues,
            headers: {
                'Accept': 'application/json'
            }
        })
        if(data.ok){
            form.reset();
        }
    }

    return (
        <>
        <Head>
            <title>Contact Web Developer Franco</title>
        </Head>
            {!submitted ? 
            <div className="grid pl-[2rem] lg:flex xl:mt-48 lg:justify-between pr-[0.5rem] mb-32 xl:flex xl:justify-evenly mt-28" id="div-form">
                <div className="" id="containerTextContact">
                    <h3 className="text-5xl font-medium leading-[3rem] md:text-6xl xl:text-6xl mb-4">Charlemos</h3>
                    <p className="text-xl xl:text-xl sm:text-lg md:text-xl leading-[3rem]">
                        <span className="text-neutral-500">Por email:</span> <a className="leading-[3rem] border-black border-b-[1px] hover:text-neutral-500 hover:border-neutral-500" href="mailto:fpadularrosa22@gmail.com">fpadularrosa22@gmail.com</a> <br/>
                    </p>
                    <p className="text-xl xl:text-xl md:text-xl sm:text-lg leading-[3rem] ">
                        <span className="text-neutral-500">Por</span> <a className="leading-[3rem] border-black border-b-[1px] hover:text-neutral-500 hover:border-neutral-500" target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/padularrosa-franco-fullstack">LinkedIn</a> <br/>
                        <span className="text-neutral-500">Nací en Argentina, Buenos Aires</span><br/>
                        <a className="leading-[3rem] border-black border-b-[1px] hover:text-neutral-500 hover:border-neutral-500" target='_blank' rel="noreferrer" href="https://www.zeitverschiebung.net/en/abbr/14">Qué hora es acá? </a>
                    </p>
                </div>
                <form className="grid w-full mt-7 xl:w-[40%] sm:w-[93%] md:mt-7 lg:w-[60%]" onSubmit={e => handleSubmit(e)} action="https://formspree.io/f/xayvprej" autoComplete="nope" id='form-contact' method="POST">
                    <Input className="w-full px-4 py-5 text-base font-semibold border-b-2 border-gray-400 focus:outline-none focus:border-green-400"
                    value={values.name}
                    onChange={handleChange} 
                    name='name' 
                    placeholder='Tu nombre'/>
                    <Input className="w-full px-4 py-5 text-base font-semibold border-b-2 border-gray-400 focus:outline-none focus:border-green-400"
                    value={values.email} 
                    onChange={handleChange} 
                    name='email' 
                    placeholder='Tu email'/>
                    <TextArea
                    className="w-full px-4 py-5 text-base font-semibold border-b-2 border-gray-400 focus:outline-none focus:border-green-400"
                    rows='5'
                    onChange={handleChange}
                    name='project'
                    placeholder="Háblame del proyecto" 
                    value={values.project}
                    />
                    <div  id="containerButtonSubmit">
                        <div className="inline-block text-xl font-medium transition ease-in-out border-b-2 rounded-md duration-400 mt-7 hover:border-b-2 hover:border-black text-neutral-900 hover:text-neutral-500">
                            <button type='submit'>
                                Enviar mensaje
                            </button>
                        </div>
                    </div>
                </form>
            </div> : <div className="flex justify-center pt-32 md:mx-20">
                        <div className="w-1/3 sm:w-[65%] sm:mx-0 sm:h-[5rem] text-center text-white bg-black md:w-2/3 lg:py-0 mx-96 md:mb-0 md:mx-0 mb-36 mt-36 h-28">
                            <div className="lg:p-5 md:p-[27px] sm:p-[10px] p-7">
                            Tu mensaje fue enviado.<br/>
                            Me pondré en contacto con usted dentro de las 24-48 horas.
                            </div>
                        </div>
                    </div>
                }
        </>
    )
}

export default Contact;
