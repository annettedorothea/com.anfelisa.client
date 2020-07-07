/* 
 * Copyright (c) 2020, Annette Pohl, Koblenz, Germany
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.

 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * generated with de.acegen 0.9.5
 *
 */




import ACEController from "../ace/ACEController";
import InitAction from "../../src/common/actions/InitAction";
import RouteChangedAction from "../../src/common/actions/RouteChangedAction";
import RouteAction from "../../src/common/actions/RouteAction";
import InitialLoginAction from "../../src/common/actions/InitialLoginAction";
import LogoutAction from "../../src/common/actions/LogoutAction";
import DisplayErrorAction from "../../src/common/actions/DisplayErrorAction";
import DisplayErrorAndLogoutAction from "../../src/common/actions/DisplayErrorAndLogoutAction";
import DisplayMessageAction from "../../src/common/actions/DisplayMessageAction";
import ClearToastAction from "../../src/common/actions/ClearToastAction";
import DisplaySaveBugDialogAction from "../../src/common/actions/DisplaySaveBugDialogAction";
import CallSaveBugAction from "../../src/common/actions/CallSaveBugAction";
import CancelSaveBugDialogAction from "../../src/common/actions/CancelSaveBugDialogAction";
import HideSaveBugDialogAction from "../../src/common/actions/HideSaveBugDialogAction";

export default class ActionFactoryRegistrationCommon {

	static init() {
		ACEController.registerFactory('common.InitAction', 
			(actionData) => new InitAction());
		ACEController.registerFactory('common.RouteChangedAction', 
			(actionData) => new RouteChangedAction());
		ACEController.registerFactory('common.RouteAction', 
			(actionData) => new RouteAction(actionData.hash));
		ACEController.registerFactory('common.InitialLoginAction', 
			(actionData) => new InitialLoginAction());
		ACEController.registerFactory('common.LogoutAction', 
			(actionData) => new LogoutAction());
		ACEController.registerFactory('common.DisplayErrorAction', 
			(actionData) => new DisplayErrorAction(actionData.error));
		ACEController.registerFactory('common.DisplayErrorAndLogoutAction', 
			(actionData) => new DisplayErrorAndLogoutAction(actionData.error));
		ACEController.registerFactory('common.DisplayMessageAction', 
			(actionData) => new DisplayMessageAction(actionData.messageKey));
		ACEController.registerFactory('common.ClearToastAction', 
			(actionData) => new ClearToastAction());
		ACEController.registerFactory('common.DisplaySaveBugDialogAction', 
			(actionData) => new DisplaySaveBugDialogAction());
		ACEController.registerFactory('common.CallSaveBugAction', 
			(actionData) => new CallSaveBugAction());
		ACEController.registerFactory('common.CancelSaveBugDialogAction', 
			(actionData) => new CancelSaveBugDialogAction());
		ACEController.registerFactory('common.HideSaveBugDialogAction', 
			(actionData) => new HideSaveBugDialogAction());
	}

}




/******* S.D.G. *******/



