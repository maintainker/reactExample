import React from "react";

const Box = ({selected,children})=>{
    console.log(selected)
    return(
        <div className={selected.length !== 0 && selected === String(children)? "box active":"box"}>
            <span>
                {children}
            </span>
        </div>
    )
}

export default Box;