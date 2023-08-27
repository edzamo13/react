import './App.css';


const estilo = (bg = '#222') => ({background: bg, color: '#fff', padding: '10px 15px', margin: '10px 15px'})
const estilo2 = {
    boxShadow: '0 5px 3px rgba(0,0,0,0.5)'
}
const Li = ({children, estado}) => {

    return (
        <li style={
                {
                    ... estilo2,
                    ... estilo({bg:'#750'})

                }
            }
            className='class-li'>
            {children}
            - {estado}</li>
    )
}
const App = () => {
    const valor = 'soy una variable'
    return (
        <ul className='class-ul'>
            <>
                <Li estado={'feliz'}>Paula</Li>
                <Li>Patricia</Li>
                <Li>Zamora</Li>
            </>
        </ul>
    );
}

export default App;


/*
import './App.css';

const Li = (props) => {
    return(
      <li>{props.children}</li>
    )
}
const App = () => {
    const valor = 'soy una variable'
    return (
        <ul className='class-ul'>
            <>
                <Li>Paula</Li>
                <Li>Patricia</Li>
                <Li>Zamora</Li>
            </>
        </ul>
    );
}

export default App;

*/


/*
(
        <li style={
            estilo('#057')
        }>
            {children}
            - {estado}</li>
    ) */
