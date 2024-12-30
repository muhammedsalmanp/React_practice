import React from "react";

const Greet = (props)=> {
    return (
        <div>
            <h1>welcome {props.name} !! your age is {props.age}</h1>
             <h3> {props.children}</h3>
        </div>
    )
}

export default Greet ; 