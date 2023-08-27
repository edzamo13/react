import Button from "./Button";

const App = () => {
const miVariable= true
if(miVariable){
    return <p> Mi variable dio True</p>
}


    return (

        <div>
            <h1>Hi world</h1>
            <Button onClick={onclick}/>
        </div>
    )
}

export default App;
