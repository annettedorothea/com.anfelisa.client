/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractDeleteBoxClickCommand from "../../../gen/box/commands/AbstractDeleteBoxClickCommand";

export default class DeleteBoxClickCommand extends AbstractDeleteBoxClickCommand {
    execute(data) {
        data.deleteBox = {
            confirmDelete: true,
            boxId: data.boxId
        };
    	this.addOkOutcome(data);
    	return data;
    }
}




/******* S.D.G. *******/



