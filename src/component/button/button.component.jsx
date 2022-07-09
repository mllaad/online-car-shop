import './button.styles.scss'

const BUTTON_TYPE_CLASSES = {
    darkblue: 'darkblue',
    inverted: 'inverted',
    darkblueInvert: 'darkblue-invert',
}

const Button = ({buttonType, ...otherProps}) => {
    return(
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}{...otherProps}></button>
    )
}
export default Button;