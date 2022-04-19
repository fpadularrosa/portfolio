
const TextArea = ({ name, placeholder,value, onChange, ...props}) => {
    return(
        <div>
            <textarea 
            className='w-1/4 h-15' 
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

export default TextArea;