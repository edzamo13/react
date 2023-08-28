import Button from "./Button";
import Lista from "./Lista";

const App = () => {
const miVariable= false
if(miVariable){
    return <p> Mi variable dio True</p>
}


    return (

        <div>
            <h1>Hi world</h1>
            <Lista></Lista>
            <Button onClick={onclick}/>
        </div>
    )
}

export default App;
