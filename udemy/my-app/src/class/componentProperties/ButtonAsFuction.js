import { useState } from "react";

export default function ButtonAsFunction() {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log('State value is: ', count)
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Button As Fuction </button>;
}
