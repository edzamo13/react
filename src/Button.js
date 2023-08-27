import "./css/Button.css"

const Button = ({onclick}) => {


    console.log('props', onclick)
    return (
        <button className="class-btn" {...onclick}
            onClick={onClick}>
            Send</button>
    )
}

const onClick = (e) => {
    console.log('console.log', e)
    return(console.log('hola como estas'))
}

function onClickFuction(params) {
    return(console.log('holaaaaa'))
}

export default Button;
