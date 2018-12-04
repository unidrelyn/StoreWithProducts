import React, { Component } from 'react';




class ShoppingCart extends Component {
  state = {
      cart: []
    };
  

  render() {
    return (
    <tbody>
        {this.state.cart.map(product =>
            <tr key={product.id}>
            <td>{product.name}</td>
            <td >${product.price}</td>
            <td ><Button onClick={() => this.removeFromCart(product)}></Button></td>
            </tr>
        )}
    </tbody>
    <tfoot>
        <tr>
            <td>
            Total: ${this.state.cart.reduce((sum, product) => sum + product.price, 0)}
            </td>
        </tr>
    </tfoot>
    )
  }

  removeFromCart(product) {

  }
}

export default ShoppingCart;