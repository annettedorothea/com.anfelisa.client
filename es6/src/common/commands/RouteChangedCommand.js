/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AbstractRouteChangedCommand from "../../../gen/common/commands/AbstractRouteChangedCommand";

export default class RouteChangedCommand extends AbstractRouteChangedCommand {
    execute(data) {
        const hashes = data.hash.split("/");
        if (data.hash.startsWith("#confirmemail") && hashes.length >= 2 && hashes[1] && hashes[2]) {
            data.username = hashes[1];
            data.token = hashes[2];
            this.addConfirmEmailOutcome(data);
        } else if (data.hash.startsWith("#resetpassword") && hashes.length >= 1 && hashes[1]) {
            data.resetPasswordView = {
                token: hashes[1],
                passwordMismatch: false,
                password: "",
                passwordRepetition: ""
            };
            this.addResetPasswordOutcome(data);
        } else if (data.hash === "#dashboard" && this.isUserLoggedIn(data)) {
            data.dashboardView = {};
            this.addDashboardOutcome(data);
        } else if (data.hash === "#profile" && this.isUserLoggedIn(data)) {
            this.addProfileOutcome(data);
        } else if (data.hash.startsWith("#categories") && hashes.length >= 2 && this.isUserLoggedIn(data)) {
            data.rootCategoryId = hashes[1];
            data.authorView = {};
            if (hashes[hashes.length - 1] === "reverse") {
                data.authorView.reverse = true;
                data.selectedCategoryId = hashes.length === 3 ? data.rootCategoryId : hashes[2];
            } else {
                data.authorView.reverse = false;
                data.selectedCategoryId = hashes.length === 2 ? data.rootCategoryId : hashes[2];
            }
            this.addCategoriesOutcome(data);
        } else if (data.hash.startsWith("#box/settings") && hashes.length >= 2 && hashes[2] && this.isUserLoggedIn(data)) {
            data.boxSettingsView = {
                boxId: hashes[2]
            };
            this.addBoxSettingsOutcome(data);
        } else if (data.hash.startsWith("#box/active-cards") && hashes.length >= 2 && hashes[2] && this.isUserLoggedIn(data)) {
            data.allActiveCardsView = {
                boxId: hashes[2]
            };
            this.addAllActiveCardsOutcome(data);
        } else if (data.hash === "#box/create" && this.isUserLoggedIn(data)) {
            data.boxSettingsView = {
                maxCardsPerDay: 8,
                maxInterval: "",
                boxId: "",
                categoryName: "",
                dictionaryLookup: false,
                wantedLanguage: "",
                givenLanguage: ""
            };
            this.addBoxCreateOutcome(data);
        } else if (data.hash.startsWith("#box") && hashes.length >= 1 && hashes[1] && this.isUserLoggedIn(data)) {
            data.queryCardView = {
                boxId: hashes[1]
            };
            this.addNextCardOutcome(data);
        } else if (data.hash === "" && !this.isUserLoggedIn(data)) {
            data.loginView = {
                username: "",
                password: "",
                saveInLocalStorage: false
            };
            this.addLoginOutcome(data);
        } else if (data.hash === "#registration" && !this.isUserLoggedIn(data)) {
            data.registrationView = {
                displayUsernameSpinner: false,
                usernameAvailable: undefined,
                username: "",
                email: "",
                emailInvalid: false,
                passwordMismatch: false,
                password: "",
                passwordRepetition: ""
            };
            this.addRegistrationOutcome(data);
        } else if (data.hash === "#forgotpassword" && !this.isUserLoggedIn(data)) {
            data.forgotPasswordView = {
                username: ""
            };
            this.addForgotPasswordOutcome(data);
        } else if (data.hash === "#privacypolicy") {
            data.privacyPolicyView = {};
            this.addPrivacyPolicyOutcome(data);
        } else if (this.isUserLoggedIn(data)) {
            this.addInvalidOutcome(data);
            data.hash = "#dashboard";
        } else {
            this.addInvalidOutcome(data);
            data.hash = "#";
        }
        return data;
    }

    isUserLoggedIn(data) {
        return (data.loggedInUser && data.loggedInUser.password && data.loggedInUser.username);
    }
}




/******* S.D.G. *******/



