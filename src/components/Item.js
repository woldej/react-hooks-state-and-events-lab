import React,{useState} from "react";

function Item({ name, category }) {
const[inCart,setInCart]=useState(true)
function cartSelect(){
      setInCart((inCart)=>!inCart)
    
  }

  return (
    <li className={inCart ?"" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add"
      onClick={cartSelect}>{inCart ?"Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
  }

export default Item;
