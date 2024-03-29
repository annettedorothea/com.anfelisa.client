/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/


import React from "react";

export const TileHeader = (props) => {
    return <div className={`tileHeader ${props.archived ? 'archived' : ''}`}>
        <h2>
            {props.categoryName}
            {props.reverse ? <i className="fas fa-exchange-alt"/> : null}
        </h2>
        <div className="buttons">
            {props.children}
        </div>
    </div>
}


/******* S.D.G. *******/



