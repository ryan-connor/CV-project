import React from "react";
import uniqid from "uniqid";

//functions to toggle readonly attribute
let readOnlyFalse = (e) => {
    console.log("read only");

    //get parent element then select all input children
    let parentDiv = e.target.parentElement;
    let inputs = parentDiv.querySelectorAll("input");
    console.log(inputs);
    inputs.forEach( (item) => {
        item.readOnly = false;
    })
};

let readOnlyTrue = (e) => {
    console.log("read only");

    //get parent element then select all input children
    let parentDiv = e.target.parentElement;
    let inputs = parentDiv.querySelectorAll("input");
    console.log(inputs);
    inputs.forEach( (item) => {
        item.readOnly = true;
    })
};

const AddHeader = (props) => {

    let item= props.header;
    return (
        <div id={uniqid()} className="item header" >
            <input placeholder="Full Name" defaultValue={item.name} readOnly="true"></input>
            <input placeholder="Phone Number" defaultValue={item.phone} readOnly="true"></input>
            <input placeholder="LinkedIn" defaultValue={item.linkin} readOnly="true"></input>
            <input placeholder="Website/Github" defaultValue={item.github} readOnly="true"></input>
            <button onClick={readOnlyFalse}>Edit</button>
            <button onClick={readOnlyTrue}>Submit</button>
        </div>
    
        )
};

export default AddHeader;
