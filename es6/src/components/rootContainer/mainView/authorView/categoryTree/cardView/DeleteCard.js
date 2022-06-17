/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import React from "react";
import {Modal} from "../../../../../common/Modal";
import {translate} from "../../../../../../AppUtils";
import {Texts} from "../../../../../../app/Texts";

export const DeleteCard = (props) => {
	if (props.confirmDelete === true) {
		return <Modal
			title={translate(Texts.cardList.confirmDelete.title)}
			message={translate(Texts.cardList.confirmDelete.message)}
			confirm={translate(Texts.cardList.confirmDelete.ok)}
			cancel={translate(Texts.cardList.confirmDelete.cancel)}
			onConfirm={props.deleteCard}
			onCancel={props.cancelDeleteCard}
		/>
	}
	return null;
}



/******* S.D.G. *******/



