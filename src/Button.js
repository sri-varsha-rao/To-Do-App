import React from "react";
import "./Button.css"

const Button= ({title="None--default"}) => ( //parenthesis instead of curly braces with no return key word
    <button className="button">{ title }</button>
);

export default Button;