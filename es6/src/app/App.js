import AppUtils from "./AppUtils";

import EventListenerRegistrationCommon from "../../gen/common/EventListenerRegistration";
import ActionFactoryRegistrationCommon from "../../gen/common/ActionFactoryRegistration";

import EventListenerRegistrationProfile from "../../gen/profile/EventListenerRegistration";
import ActionFactoryRegistrationProfile from "../../gen/profile/ActionFactoryRegistration";

import Container from "../web/Container";

export * from "../../gen/ace/Scenario";
export * from "../../gen/ace/Bug";
export * from "../../gen/common/ActionFunctionExports";

AppUtils.start();

const React = require('react');
const ReactDOM = require('react-dom');

export const container = ReactDOM.render(
    <Container />,
    document.getElementById('root')
);

EventListenerRegistrationCommon.init();
ActionFactoryRegistrationCommon.init();

EventListenerRegistrationProfile.init();
ActionFactoryRegistrationProfile.init();

/*       S.D.G.       */

