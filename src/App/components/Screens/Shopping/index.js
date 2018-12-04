import React, { Component } from "react";
import Products from "./components/Products";

import Data from "../../../../Data/categories.json";

import styles from "./styles.module.scss";

class Shopping extends Component {
  state = {
    optionsProducts: ["elije una opción"],
    products: [],
    id: 0
  }

  clearState = async() =>{
    await this.setState({
      optionsProducts: [ ]
    });
  }

  selectSublevel=(item, stateProduct)=>{ 
    stateProduct.map(itemProduct =>{
      const product = item;
      const nameSubLevel = itemProduct.name;
      const subLevel = itemProduct.sublevels;
      const id = itemProduct.id;
      if (product === nameSubLevel){
        if (subLevel) {
          return (
          this.setState({
            optionsProducts: subLevel,
            products: subLevel,
            id: id
          }))
        } else {
          return (
            this.setState({
              products: subLevel,
              id: id
            })
          )
        }
      }
    })
  }

  selectCategorie=(item)=> {
    const nameCategorie = item;
    const {categories} = Data;
    categories.map(itemCategory => {
      const selectCategorie = itemCategory.name;
      const levelIni = itemCategory.sublevels;
      if (nameCategorie === selectCategorie) {
        this.setState({
          optionsProducts: levelIni
        })
      }
    })
  }

  shopping() {
    const id = this.state.id
    return <Products id={id} />
  }

  render () {
    const {categories} = Data;
    const stateProduct = this.state.optionsProducts;
    return (
      <div className={styles.shopping}>
        <h1 className= {styles.text}>shopping</h1>
        {categories.map(item => {
          const selectCategorie = item.name;
          const id= item.id;
          return (
          <button className={styles.button_categorie} key={id} onClick={()=>this.selectCategorie(selectCategorie)} > 
            {selectCategorie}
          </button>
          )
        })}
        {stateProduct.map(item =>{
          const categorie = item.name;
          const id= item.id;
          return (
            <a className={styles.products} key={id} onClick={()=>this.selectSublevel(categorie, stateProduct)} > 
              {categorie}
            </a>
          )
        })}
        {this.shopping()}
      </div>
    );
  }
}

export default Shopping;
