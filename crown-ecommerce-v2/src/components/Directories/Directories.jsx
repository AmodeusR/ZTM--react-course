import React from "react";
import { ProductCard } from "/src/components";
import "./directories.scss";

const Homepage = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "women",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "men",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return (
    <main className="homepage">
      {categories.map(({ id, title, imageUrl }) => (
        <ProductCard
          key={id}
          productName={title}
          imgSrc={imageUrl}
          className={title}
        />
      ))}
    </main>
  );
};

export default Homepage;
