const Input = ({name, placeholder, value, onChange, ...props}) => {
    return(
        <div>
            <input 
            autoComplete='off' 
            type='text' 
            name={name} 
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            {...props}
            required></input>
        </div>
    )
}
export default Input;