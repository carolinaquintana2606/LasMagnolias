import './Button.css'

const Button = ({label, action}) =>{
    return (
        <button className= "Button" onClick={action}>
            {label}
        </button>
    )
}

export default Button;