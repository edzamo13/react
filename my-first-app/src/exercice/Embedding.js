function Embedding() {
  return (element);
}

function formatName(person) {
  return person.firstName + " " + person.lastName;
}


const person = {
  firstName: "Edwin",
  lastName: "Zamora",
};

const element = <h1> Hi world !.. second... {formatName(person)}! </h1>;



export default Embedding;
