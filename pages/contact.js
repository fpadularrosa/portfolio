import { useState } from "react";
import Input from "../components/Input";
import TextArea from "../components/Textarea";
const axios = require('axios');

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
        const data = {...values};
        try {
            const res = await fetch('/api/mail', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            console.log('SOY RES: ', res)
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true)
                setValues({name: '',email: '', project:''})
              }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <h3>Charlemos</h3>
            <div id="div-form">
                <form onSubmit={e => handleSubmit(e)} method='POST' data-netlify='true'>
                    <Input value={values.name} onChange={handleChange} name='name' placeholder='Tu nombre'/>
                    <Input value={values.email} onChange={handleChange} name='email' placeholder='Tu email'/>
                    <TextArea
                    onChange={handleChange}
                    name='project'
                    placeholder="Háblame del proyecto" 
                    value={values.project}
                    />
                    <div>
                        <button type='submit'>
                            Enviar mensaje
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contact;
