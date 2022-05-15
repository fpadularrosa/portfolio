const Textarea = ({ name, placeholder,value, onChange, ...props}) => {
    return(
        <div>
            <textarea 
            autoComplete='off' 
            type='text' 
            rows={5}
            name={name} 
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            {...props}
            required></textarea>
        </div>
    )
}

export default Textarea;