import * as App from "../../app/App";

export default class LoginView {

	static render(eventData) {
        App.container.setState({
            route: "login",
            data : undefined
        });
	};
	
}

/*                    S.D.G.                    */