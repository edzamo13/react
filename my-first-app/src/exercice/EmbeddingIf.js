function EmbeddingIf() {
  return elementTwo;
}

function formatName(person) {
  return person.firstName + " " + person.lastName;
}

function getGreeting(person) {
  if (person) {
    return <div> <h1> Hello!! , {formatName(person)} </h1> </div>;
  }
  return <div> <h1> Hello, Strager. </h1> </div>;
}

const person = {
  firstName: "Edwin",
  lastName: "Zamora",
};

const elementTwo = 
  <div>
    {" "}
    <h1> Validation in Greeting ... {getGreeting(person)}</h1>
  </div>
;

export default EmbeddingIf;
