/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/


import React from "react";

export const Priority = (props) => {
    const priorityClass = (index) => {
        if (props.value && index <= props.value) {
            return "fa fa-star";
        }
        return "far fa-star";
    }
    return <span className="priority noBreak">
        <div onClick={() => props.onClick(props.value === 1 ? null : 1)}>
            <i
                className={priorityClass(1)}
            />
        </div>
        <div onClick={() => props.onClick(props.value === 2 ? null : 2)}>
            <i
                className={priorityClass(2)}
            />
        </div>
        <div onClick={() => props.onClick(props.value === 3 ? null : 3)}>
            <i
                className={priorityClass(3)}
            />
        </div>
    </span>
}


/******* S.D.G. *******/



