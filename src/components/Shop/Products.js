import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_ITEMS = [
  { id: 1, name: "Bed", price: 799, desc: "A King size Bed" },
  { id: 2, name: "Table", price: 299, desc: "A table for 4 people" },
  { id: 3, name: "Chair", price: 89, desc: "A chair with pillow" },
  {
    id: 4,
    name: "Pillows",
    price: 49,
    desc: "2 Pillows with designer covers",
  },
  { id: 5, name: "Blanket", price: 39, desc: "Woolen blanket for winters" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_ITEMS.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={+item.price}
            desc={item.desc}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
