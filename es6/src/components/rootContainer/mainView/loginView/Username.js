/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/


import React from "react";

import {translate} from "../../../../AppUtils";
import {Texts} from "../../../../app/Texts";
import {route} from "../../../../../gen/common/ActionFunctions";

export const Username = (props) => {
    return <div className="line">
        <label htmlFor="username">
            {translate(Texts.login.username)}
        </label>
        <input
            id="username"
            type="text"
            onChange={(event) => props.onChange(event.target.value)}
        />
        <a id="registration" onClick={props.onClick}>{translate(Texts.login.registration)}</a>
    </div>
}


/******* S.D.G. *******/



