/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/


import React from "react";

import {translate} from "../../../../AppUtils";
import {Texts} from "../../../../app/Texts";

export const Username = (props) => {
    return <>
        <input
            id="username"
            type="text"
            value={props.value}
            onChange={(event) => props.onChange(event.target.value)}
            placeholder={translate(Texts.login.username)}
        />
        <a id="registration" onClick={props.onClick}>{translate(Texts.login.registration)}</a>
    </>
}


/******* S.D.G. *******/



