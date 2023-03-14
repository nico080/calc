import React from "react";
import "./Button.css";

const Button = ({ className, value, onClick, Mem }) => {

  

  
  if (value === 'OPS')
  {
    return <select className={className}  onClick={onClick}>
    <option  value="+">+</option>
    <option  value="-">-</option>
    <option  value="/">÷</option>
    <option value="X">x</option>
  </select>;
  }
 

  else if(value === "MST"){
    const Item = (x) => {
        return <option>{x}</option>;
    };
    return <select className={className}  onClick={onClick}>
   {Mem.map(Item)}
  </select>;

  } 
  else
  {
    return (
      <button className={className} onClick={onClick}>
        {value}
      </button>
    );}


};

export default Button;
