import "./App.css";
import ButtonAsFunction from "./class/componentProperties/ButtonAsFuction";
import ButtonComponent from "./class/componentProperties/ButtonAsComponet";
import Input from "./class/componentProperties/Input";
import { useState } from "react";

function App() {
  const [lastName, setLastName] = useState("");
  const [user, setUser] = useState({
    name: "",
    lastName: "",
  });

  function updateUser(props, value) {
    setUser({
      [props]: value,
      [props]: value,
    });
  }

  return (
    <div>
      <h2> My first Step in React</h2>
      <br />
      <h2> This part I'm using Function and Component</h2>
      <ButtonAsFunction />
      <br />
      <ButtonComponent pig="Happy" />
      <br />
      <h2> This up Statet</h2>
      <p>
        <Input
          value={user.nombre}
          onChange={(e) => updateUser('name', e.target.value)}
        />
        <Input value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <br />
        Full Name: {`name: ${user.name} lastName:  ${lastName}`}
      </p>
    </div>
  );
}

export default App;
