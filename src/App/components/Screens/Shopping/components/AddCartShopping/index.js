import React, { Component } from "react";


class ProductList extends Component {
  //meto la data

  render() {
    return (
      <div >
        {this.state.products.map(product =>
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <div>
              <h4>{product.name}</h4>
              <p>
                <Button onClick={() => this.addToCart(product)}  disabled={product.inventory <= 0}>${product.price} </Button>
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }

  addToCart(product) {

  }
}

export default ProductList;