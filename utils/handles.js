module.exports = {
    change: (e) => {
        setValues((prev) => ({
            ...prev, 
            [e.target.name]: e.target.value
            }))
    },
    submit: async (e) => {
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
}