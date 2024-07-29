import { useState } from "react";
import style from "./MenuItems.module.css";
import { menu_list } from "../../assets/frontend_assets/assets";
import Products from "../ExploreProducts/Products.jsx";
import ItemDisplay from "../../ItemDisplay/ItemDisplay.jsx";
const MenuItems = ({ category, setCategory, type, settype }) => {
  // const [type, settype] = useState("All");

  return (
    <div>
      <div className={style.exploreMenuItem}>
        {menu_list.map((item, index) =>
          category === "All" || category === item.category ? (
            <div
              className={style.exploreMenuItemList}
              key={index}
              onClick={() =>
                settype((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
            >
              <img
                className={` ${type === item.menu_name ? style.active : ""}`}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          ) : null
        )}
      </div>
      <ItemDisplay type={type} settype={settype}></ItemDisplay>
    </div>
  );
};

export default MenuItems;
