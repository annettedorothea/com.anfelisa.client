/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractEditCardCommand from "../../../gen/card/commands/AbstractEditCardCommand";

export default class EditCardCommand extends AbstractEditCardCommand {
    execute(data) {
        const card = data.cardList.filter(c => c.cardId === data.cardId)[0];
        const givenIsImage = card.given.indexOf("data:image") === 0;
        const wantedIsImage = card.wanted.indexOf("data:image") === 0;
        data.editedCard = {
            cardId: data.cardId,
            given: !givenIsImage ? card.given : "",
            givenImage: givenIsImage ? card.given : null,
            wanted: !wantedIsImage ? card.wanted : "",
            wantedImage: wantedIsImage ? card.wanted : null
        };
    	this.addOkOutcome(data);
    	return data;
    }
}




/******* S.D.G. *******/



