import React from "react";

function PrimaryButton({children, onClick}){
    return(
        <button
            onClick = {onClick}
            className = "bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        > {children}
        </button>

    )
}

export default PrimaryButton;