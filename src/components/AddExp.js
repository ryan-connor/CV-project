import React from "react";
import uniqid from "uniqid";

//functions to toggle readonly attribute
let readOnlyFalse = (e) => {
    //get parent element then select all input children
    let parentDiv = e.target.parentElement;
    let inputs = parentDiv.querySelectorAll("input");
    inputs.forEach( (item) => {
        item.readOnly = false;
    })
};

let readOnlyTrue = (e) => {
    //get parent element then select all input children
    let parentDiv = e.target.parentElement;
    let inputs = parentDiv.querySelectorAll("input");
    inputs.forEach( (item) => {
        item.readOnly = true;
    })
};

const AddExp = (props) => {
    return (
        props.expItems.map( (item) => {
        return (
        <div id={uniqid()} className="item exp" >
            <input defaultValue={item.title} readOnly="true"></input>
            <input defaultValue={item.date} readOnly="true"></input>
            <input defaultValue={item.desc} id="desc" readOnly="true"></input>
            <button onClick={readOnlyFalse}>Edit</button>
            <button onClick={readOnlyTrue}>Submit</button>
        </div>
        )
        })
    );
};

export default AddExp;
