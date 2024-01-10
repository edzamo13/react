function MyButton() {
  function handleClick() {
    alert("You clicked me!  I'm Back ");
  }
  return <button onClick={handleClick}>Click me !..</button>;
}

export default MyButton;
