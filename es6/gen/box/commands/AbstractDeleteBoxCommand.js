/* 
 * Copyright (c) 2020, Annette Pohl, Koblenz, Germany
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.

 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * generated with de.acegen 0.9.2
 *
 */




import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import ACEController from "../../ace/ACEController";
import * as AppState from "../../ace/AppState";
import DeleteBoxErrorEvent from "../../../gen/box/events/DeleteBoxErrorEvent";
import LoadBoxesAction from "../../../src/box/actions/LoadBoxesAction";
import DisplayErrorAction from "../../../src/common/actions/DisplayErrorAction";

export default class AbstractDeleteBoxCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.DeleteBoxCommand");
        this.ok = "ok";
        this.error = "error";
        this.commandData.boxId = AppState.get_dashboardView_deleteBox_boxId();
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new LoadBoxesAction()).publish());
			break;
		case this.error:
			promises.push(new DeleteBoxErrorEvent(this.commandData).publish());
			promises.push(new TriggerAction(new DisplayErrorAction(this.commandData.error)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('DeleteBoxCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		uuid : this.commandData.uuid
	    	};
	
			this.httpDelete(`/${Utils.getRootPath()}/box/delete?uuid=${this.commandData.uuid}&boxId=${this.commandData.boxId}`, true).then((data) => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



