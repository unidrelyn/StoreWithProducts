import React from "react";
import Data from "../../../../../../Data/products.json";

import styles from "./styles.module.scss";

function Products(props) {
  const {id} = props;
  const {products} = Data;
  if (id !==0) {
    return (
      <div >
        {products.map(item =>{
          const product = item.name;
          const idProduct = item.sublevel_id;
          const price = item.price;
          if (id === idProduct) {
            return (
              <div className={styles.products}> 
                <p>{product}</p>
                <p>Precio {price}</p>
                <button>Shopping</button>
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    return <p> Escoge producto </p>;
  }
}

export default Products;