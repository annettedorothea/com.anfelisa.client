import React from 'react';
import Dashboard from "./Dashboard";
import Logout from "./Logout";
import Profile from "./Profile";
import UserList from "./UserList";

export default class UserContainer extends React.Component {

    render() {
        let content;
        switch (this.props.route) {
            case "user-list":
                content = <UserList {...this.props} />;
                break;
            case "profile":
                content = <Profile {...this.props} />;
                break;
            case "dashboard":
            default:
                content = <Dashboard {...this.props} />;
        }

        return (
            <div>
                <Logout {...this.props} />
                <div>
                    {content}
                </div>
            </div>
        );
    }
}

