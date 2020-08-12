import React from "react";

const Box = ({children})=>{
    return(
        <div className="box">
            <span>
                {children}
            </span>
        </div>
    )
}

export default Box;