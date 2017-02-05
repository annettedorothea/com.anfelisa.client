'use strict';

class ScoreReinforcedCardAction extends AbstractScoreReinforcedCardAction {

    captureActionParam() {
        this.actionParam.username = localStorage.username;
        this.actionParam.password = localStorage.password;
        this.actionParam.schema = localStorage.schema;
    }

    initActionData() {
    	this.actionData.username = this.actionParam.username;
    	this.actionData.password = this.actionParam.password;
    	this.actionData.schema = this.actionParam.schema;
        this.actionData.quality = this.actionParam.quality;
    }

    releaseActionParam() {
    	localStorage.username = this.actionParam.username;
    	localStorage.password = this.actionParam.password;
    	localStorage.schema = this.actionParam.schema;
    }
}

/*       S.D.G.       */
