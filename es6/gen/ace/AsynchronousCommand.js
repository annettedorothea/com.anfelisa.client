import ACEController from "./ACEController";
import Command from "./Command";
import AppUtils from "../../src/app/AppUtils";
import Utils from "./Utils";

export default class AsynchronousCommand extends Command {
    executeCommand() {
        return new Promise((resolve, reject) => {
			if (ACEController.execution !== ACEController.REPLAY) {
				this.initCommandData();
			    this.execute().then(() => {
			        ACEController.addItemToTimeLine({command: this});
			        this.publishEvents();
			        resolve();
			    }, (error) => {
			        reject(error);
			    });
			} else {
			    const timelineCommand = ACEController.getCommandByUuid(this.commandData.uuid);
			    this.commandData = timelineCommand.commandData;
			    ACEController.addItemToTimeLine({command: this});
		        this.publishEvents();
		        resolve();
			}
        });
    }

    initCommandData() {
    }

    httpGet(url, authorize, queryParams) {
        return Utils.prepareAction(this.commandData.uuid).then(() => {
            queryParams = this.addUuidToQueryParams(queryParams);
            return AppUtils.httpGet(url, authorize, queryParams, this.commandData);
        }, (error) => {
            throw error;
        });
    }

    httpPost(url, authorize, queryParams, data) {
        return Utils.prepareAction(this.commandData.uuid).then(() => {
            queryParams = this.addUuidToQueryParams(queryParams);
            data = this.addUuidToData(data);
            return AppUtils.httpPost(url, authorize, queryParams, data);
        }, (error) => {
            throw error;
        });
    }

    httpPut(url, authorize, queryParams, data) {
        return Utils.prepareAction(this.commandData.uuid).then(() => {
            queryParams = this.addUuidToQueryParams(queryParams);
            data = this.addUuidToData(data);
            return AppUtils.httpPut(url, authorize, queryParams, data);
        }, (error) => {
            throw error;
        });
    }

    httpDelete(url, authorize, queryParams, data) {
        return Utils.prepareAction(this.commandData.uuid).then(() => {
            queryParams = this.addUuidToQueryParams(queryParams);
            data = this.addUuidToData(data);
            return AppUtils.httpDelete(url, authorize, queryParams, data);
        }, (error) => {
            throw error;
        });
    }

    addUuidToQueryParams(queryParams) {
        if (!queryParams) {
            queryParams = [];
        }
        if (this.commandData.uuid) {
            queryParams.push({
                key: "uuid",
                value: this.commandData.uuid
            });
        }
        return queryParams;
    }

    addUuidToData(data) {
        if (!data) {
            data = {};
        }
        if (this.commandData.uuid) {
            data.uuid = this.commandData.uuid;
        }
        return data;
    }

}

/*       S.D.G.       */


