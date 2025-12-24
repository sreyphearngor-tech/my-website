import React from "react";
import { data1 } from "../../assets/data1";
import  './ProductList.css'

export default function ProductList() {
  return (
    <div className="product-container">
        <div className="product-wrapper">
        {data1.map(item => (
        <div key={item.id} className="product-card">
          <img src={item.image} width={120} />
          <h3>{item.name}</h3>
          <h3>{item.caption}</h3>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
        </div>
  );
}
