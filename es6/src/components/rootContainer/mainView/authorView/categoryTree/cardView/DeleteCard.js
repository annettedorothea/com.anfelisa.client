/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import React from "react";
import {Modal} from "../../../../../common/Modal";
import {translate} from "../../../../../../AppUtils";
import {Texts} from "../../../../../../app/Texts";

export const DeleteCard = (props) => {
	if (props.confirmDelete === true) {
		const message = props.selectedCardIds.length === 1 ?
			translate(Texts.cardList.confirmDelete.messageOne) :
			translate(Texts.cardList.confirmDelete.messageMultiple, [props.selectedCardIds.length]);
		return <Modal
			title={translate(Texts.cardList.confirmDelete.title)}
			message={message}
			confirm={translate(Texts.cardList.confirmDelete.ok)}
			cancel={translate(Texts.cardList.confirmDelete.cancel)}
			onConfirm={props.deleteCard}
			onCancel={props.cancelDeleteCard}
		/>
	}
	return null;
}



/******* S.D.G. *******/



