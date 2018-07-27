import ACEController from "../ace/ACEController";
import GetAllUsersAction from "../../src/admin/actions/GetAllUsersAction";
import SaveRoleAction from "../../src/admin/actions/SaveRoleAction";
import DeleteUserAction from "../../src/admin/actions/DeleteUserAction";
import DeleteUserClickAction from "../../src/admin/actions/DeleteUserClickAction";
import DeleteUserCancelAction from "../../src/admin/actions/DeleteUserCancelAction";

export default class ActionFactoryRegistrationAdmin {

	static init() {
		ACEController.registerFactory('admin.GetAllUsersAction', (actionData) => new GetAllUsersAction(actionData));
		ACEController.registerFactory('admin.SaveRoleAction', (actionData) => new SaveRoleAction(actionData));
		ACEController.registerFactory('admin.DeleteUserAction', (actionData) => new DeleteUserAction(actionData));
		ACEController.registerFactory('admin.DeleteUserClickAction', (actionData) => new DeleteUserClickAction(actionData));
		ACEController.registerFactory('admin.DeleteUserCancelAction', (actionData) => new DeleteUserCancelAction(actionData));
	}

}

/*       S.D.G.       */
