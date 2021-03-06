import React from "react";
import ShopItem from "./ShopItem";
import "./shop.css";

const machines = [
  {
    name: "cursor",
    src: "./cursor.png",
    description: "Kursor zapewnia 0.1 ciastka na sekundę",
  },
  {
    name: "grandma",
    src: "./grandma.png",
    description: "Babcia zapewnia 1 ciastko na sekundę",
  },
  {
    name: "mine",
    src: "./mine.png",
    description: "Kopalnia zapewnia 10 ciastek na sekundę",
  },
  {
    name: "factory",
    src: "./factory.png",
    description: "Fabryka zapewnia 100 ciastek na sekundę",
  },
];

const Shop = () => {
  return (
    <div className="shop mt-3">
      {machines.map((machine) => (
        <ShopItem key={machine.name} name={machine.name} src={machine.src} description={machine.description} />
      ))}
    </div>
  );
};
export default Shop;
