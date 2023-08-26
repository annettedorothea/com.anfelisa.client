/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/


import React from "react";
import {translate} from "../../../../../AppUtils";
import {Texts} from "../../../../../app/Texts";
export const MoveCategory = (props) => {
    if (props.display === true) {
        return <div className="modal">
            <div className="modalContent form">
                <h2>{translate(Texts.categoryTree.moveCategory.title)}</h2>
                <div className="categoryTreeItems">
                    {props.children}
                </div>
                <div className="buttonContainer">
                    <button
                        className="yes danger"
                        onClick={props.moveCards}
                        disabled={!props.moveAllowed}
                    >
                        {translate(Texts.categoryTree.moveCategory.ok)}
                    </button>
                    <button
                        onClick={props.moveCardsCancelled}
                    >
                        {translate(Texts.categoryTree.moveCategory.cancel)}
                    </button>
                </div>
            </div>
        </div>
    }
    return null;
}


/******* S.D.G. *******/



