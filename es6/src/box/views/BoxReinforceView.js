import {mergeState, deepMergeState} from "../../app/App";

export default class BoxReinforceView {
	static render(eventData) {
        mergeState({
            route: "reinforce-card",
            data: eventData
        });
	};
	
	static displayNextItem(eventData) {
        deepMergeState({
            data: {
                index: eventData.index
            }
        });
	};
	
	static displayImage() {
        deepMergeState({
            data: {
                displayImage: true
            }
        });
	};
	
	static enableScoreButtons() {
        deepMergeState({
            data: {
                enableScoreButtons: true
            }
        });
	};
	
}

/*                    S.D.G.                    */
