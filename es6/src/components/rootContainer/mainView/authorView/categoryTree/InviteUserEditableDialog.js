/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/


import React from "react";
import {translate} from "../../../../../AppUtils";
import {Texts} from "../../../../../app/Texts";

export const InviteUserEditableDialog = (props) => {
    if (props.display !== true) {
        return null;
    }
    return <div className="modal">
        <div className="modalContent form">
            <h2>{translate(Texts.categoryTree.inviteUser.title)}</h2>
            <h3>
                {props.invitedUsername}
            </h3>
            <div>
                <input
                    type="checkbox"
                    onChange={props.inviteUserChangeEditable}
                    checked={props.editable}
                    id="editable"
                />
                <label
                    htmlFor="editable"
                >
                    {translate(Texts.categoryTree.inviteUser.editable)}
                </label>
            </div>
            <div className="buttonContainer">
                <button onClick={props.inviteUser}>{translate(Texts.categoryTree.inviteUser.invite)}</button>
                <button onClick={props.cancelInviteUser}>{translate(Texts.categoryTree.inviteUser.cancel)}</button>
            </div>
        </div>
    </div>
}


/******* S.D.G. *******/



