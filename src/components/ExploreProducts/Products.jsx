import React from "react";
import style from "./Products.module.css";
import { menu_products } from "../../assets/frontend_assets/assets";

const Products = ({ type, settype }) => {
  return (
    <div>
      <div className={style.exploreProducts}>
        {menu_products.map((item, index) =>
          type === "All" || type === item.type ? (
            <div
              className={style.exploreProductsMenu}
              key={index}
              onClick={() =>
                settype((prev) =>
                  prev === item.menu_name ? "" : item.menu_name
                )
              }
            >
              <img
                className={` ${
                  type === item.menu_name || type === "All" ? style.active : ""
                }`}
                src={item.image}
                alt=""
              />
              <h3>{item.name} </h3>
              <p>
                {item.description}
                {item.price}
              </p>
              <button onClick={() => (window.location.href = project.link)}>
                Add to Cart
              </button>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Products;
