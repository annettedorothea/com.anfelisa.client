/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/


import React from "react";
import {translate} from "../../../../AppUtils";
import {Texts} from "../../../../app/Texts";


export const Buttons = (props) => {
    return <>
        <div className="inputContainer">
            <div className="buttonContainer">
                {props.children}
            </div>
        </div>
        <div className="inputContainer">
            <div
                className="small-font">{translate(Texts.registration.terms)}
            </div>
        </div>
    </>
}


/******* S.D.G. *******/



