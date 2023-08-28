const array = ['Chancho Feliz', 'Chancho Triste', 'Chancho emocionado',]

const Lista = () => {
    return(array.map(el => <p key={el}> {el}</p>))
}
export default Lista;
