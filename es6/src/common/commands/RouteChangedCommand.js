import AbstractRouteChangedCommand from "../../../gen/common/commands/AbstractRouteChangedCommand";

export default class RouteChangedCommand extends AbstractRouteChangedCommand {
    execute() {
        return new Promise((resolve) => {
            this.commandData.outcome = this.login;
            this.commandData.password = this.commandParam.password;
            this.commandData.username = this.commandParam.username;
            if (this.commandParam.hash === "#registration") {
                this.commandData.outcome = this.registration;
            } else if (this.commandParam.hash === "#dashboard") {
                this.commandData.outcome = this.dashboard;
            } else if (this.commandParam.hash === "#profile") {
                this.commandData.outcome = this.profile;
            } else if (this.commandParam.hash === "#forgotpassword") {
                this.commandData.outcome = this.forgotPassword;
            } else if (this.commandParam.hash.startsWith("#confirmemail")) {
                const hashes = this.commandParam.hash.split("/");
                this.commandData.token = hashes[1] ? hashes[1] : "";
                this.commandData.outcome = this.confirmEmail;
            } else if (this.commandParam.hash.startsWith("#resetpassword")) {
                const hashes = this.commandParam.hash.split("/");
                this.commandData.token = hashes[1] ? hashes[1] : "";
                this.commandData.outcome = this.resetPassword;
            } else if (this.commandParam.hash === "#users") {
                this.commandData.outcome = this.userList;
            } else if (this.commandParam.hash.startsWith("#categories")) {
                const hashes = this.commandParam.hash.split("/");
                this.commandData.parentCategoryId = hashes[1] ? hashes[1] : "";
                this.commandData.outcome = this.categories;
            }
            resolve();
        });
    }
}

/*       S.D.G.       */