import AppUtils from "./AppUtils";

import EventListenerRegistrationAdmin from "../../gen/admin/EventListenerRegistration";
import ActionFactoryRegistrationAdmin from "../../gen/admin/ActionFactoryRegistration";

import EventListenerRegistrationCategory from "../../gen/category/EventListenerRegistration";
import ActionFactoryRegistrationCategory from "../../gen/category/ActionFactoryRegistration";

import EventListenerRegistrationCard from "../../gen/card/EventListenerRegistration";
import ActionFactoryRegistrationCard from "../../gen/card/ActionFactoryRegistration";

import EventListenerRegistrationBox from "../../gen/box/EventListenerRegistration";
import ActionFactoryRegistrationBox from "../../gen/box/ActionFactoryRegistration";

import EventListenerRegistrationCommon from "../../gen/common/EventListenerRegistration";
import ActionFactoryRegistrationCommon from "../../gen/common/ActionFactoryRegistration";

import EventListenerRegistrationProfile from "../../gen/profile/EventListenerRegistration";
import ActionFactoryRegistrationProfile from "../../gen/profile/ActionFactoryRegistration";

import EventListenerRegistrationRegistration from "../../gen/registration/EventListenerRegistration";
import ActionFactoryRegistrationRegistration from "../../gen/registration/ActionFactoryRegistration";

import EventListenerRegistrationLogin from "../../gen/login/EventListenerRegistration";
import ActionFactoryRegistrationLogin from "../../gen/login/ActionFactoryRegistration";

import EventListenerRegistrationPassword from "../../gen/password/EventListenerRegistration";
import ActionFactoryRegistrationPassword from "../../gen/password/ActionFactoryRegistration";

import Container from "../web/Container";
import RouteChangedAction from "../common/actions/RouteChangedAction";

export * from "../../gen/ace/Scenario";
export * from "../../gen/ace/Bug";

const React = require('react');
const ReactDOM = require('react-dom');

AppUtils.createInitialAppState();

export const container = ReactDOM.render(
    <Container/>,
    document.getElementById('root')
);

export function render(newAppState) {
    container.setState(newAppState);
}

window.onhashchange = () => {
    new RouteChangedAction().apply();
    window.scrollTo(0, 0);
};

EventListenerRegistrationAdmin.init();
ActionFactoryRegistrationAdmin.init();

EventListenerRegistrationCategory.init();
ActionFactoryRegistrationCategory.init();

EventListenerRegistrationCard.init();
ActionFactoryRegistrationCard.init();

EventListenerRegistrationBox.init();
ActionFactoryRegistrationBox.init();

EventListenerRegistrationCommon.init();
ActionFactoryRegistrationCommon.init();

EventListenerRegistrationProfile.init();
ActionFactoryRegistrationProfile.init();

EventListenerRegistrationRegistration.init();
ActionFactoryRegistrationRegistration.init();

EventListenerRegistrationLogin.init();
ActionFactoryRegistrationLogin.init();

EventListenerRegistrationPassword.init();
ActionFactoryRegistrationPassword.init();

AppUtils.start();


/*       S.D.G.       */

