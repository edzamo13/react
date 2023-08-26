function RenderLists() {
  const listItems = products.map((product) => {
    console.log("prod", product);
    return (
      <li
        key={product.id}
        style={{
          color: product.isFruit ? "magenta" : "darkgreen",
        }}
      >
        {product.title}
      </li>
    );
  });
  console.log(listItems, "");
  return <ul>{listItems}</ul>;
}

const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

export default RenderLists;
