import React from 'react';
import Dashboard from "./Dashboard";
import Logout from "./Logout";
import Profile from "./Profile";
import UserList from "./UserList";
import QueryCards from "./Box/QueryCards";
import CategoryCardSplitView from "./CategoryCardSplitView";
import {route} from "../../gen/common/ActionFunctions";

export default class UserContainer extends React.Component {

    render() {
        let content;
        switch (this.props.view) {
            case "user-list":
                content = <UserList
                    {...this.props.data}
                    texts={this.props.texts}
                    language={this.props.language}
                />;
                break;
            case "category-tree":
                content = <CategoryCardSplitView
                    {...this.props.data}
                    texts={this.props.texts}
                    language={this.props.language}
                />;
                break;
            case "profile":
                content = <Profile
                    {...this.props.data}
                    texts={this.props.texts}
                    language={this.props.language}
                />;
                break;
            case "card":
                content = <QueryCards
                    {...this.props.data}
                    texts={this.props.texts}
                    language={this.props.language}
                />;
                break;
            case "dashboard":
            default:
                content = <Dashboard
                    {...this.props.data}
                    role={this.props.loggedInUser.role}
                    texts={this.props.texts}
                    language={this.props.language}
                />;
        }

        return (
            <div className="wrapper">
                <div className="header">
                    <a onClick={() => route("#dashboard")}
                       className="title">Anfelisa</a>
                    <Logout {...this.props} />
                </div>
                <div className="content">
                    {content}
                </div>
            </div>
        );
    }
}

