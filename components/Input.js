
const Input = ({name, placeholder, value, onChange, ...props}) => {
    return(
        <div>
            <input 
            className='w-1/4 h-15' 
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