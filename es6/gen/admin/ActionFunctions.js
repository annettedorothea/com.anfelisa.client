/********************************************************************************
 * generated by de.acegen 1.0.1
 ********************************************************************************/




import GetAllUsersAction from "../../src/admin/actions/GetAllUsersAction";
import SaveRoleAction from "../../src/admin/actions/SaveRoleAction";
import DeleteUserAction from "../../src/admin/actions/DeleteUserAction";
import DeleteUserClickAction from "../../src/admin/actions/DeleteUserClickAction";
import DeleteUserCancelAction from "../../src/admin/actions/DeleteUserCancelAction";

export function getAllUsers() {
    new GetAllUsersAction().apply();
}

export function saveRole(editedUserId, newRole) {
    new SaveRoleAction(editedUserId, newRole).apply();
}

export function deleteUser() {
    new DeleteUserAction().apply();
}

export function deleteUserClick(usernameToBeDeleted) {
    new DeleteUserClickAction(usernameToBeDeleted).apply();
}

export function deleteUserCancel() {
    new DeleteUserCancelAction().apply();
}





/******* S.D.G. *******/



