import * as App from "../../app/App";

export default class BoxReinforceView {
	static render(eventData) {
        let data = eventData.data;
        data.index = 0;
        data.enableScoreButtons = false;
        data.displayImage = false;
        App.container.setState({
            route: "reinforce-card",
            data
        });
	};
	
	static displayNextItem(eventData) {
        let data = App.container.state.data;
        data.index = eventData.index;
        App.container.setState({
            data
        });
	};
	
	static displayImage(eventData) {
        let data = App.container.state.data;
        data.displayImage = true;
        App.container.setState({
            data
        });
	};
	
	static enableScoreButtons(eventData) {
        let data = App.container.state.data;
        data.enableScoreButtons = true;
        App.container.setState({
            data
        });
	};
	
}

/*                    S.D.G.                    */
