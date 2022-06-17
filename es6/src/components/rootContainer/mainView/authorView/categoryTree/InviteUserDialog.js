/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import React from "react";
import {translate} from "../../../../../AppUtils";
import {Texts} from "../../../../../app/Texts";

export const InviteUserDialog = (props) => {
	if (props.display !== true) {
		return null;
	}
	let usernames = [];
	if (props.usernames) {
		usernames = props.usernames.map(username => {
			return <li key={username}>
				<a onClick={() => props.inviteUserNextStep(username, false)}>{username}</a>
			</li>
		})
	}
	let invitedUsernames = [];
	if (props.invitedUsers) {
		invitedUsernames = props.invitedUsers.map(user => {
			return <li key={user.invitedUsername}>
				<a onClick={() => props.inviteUserNextStep(user.invitedUsername, user.editable)}>{user.invitedUsername} {user.editable && <i className="fas fa-pen"/>}</a>
			</li>
		})
	}
	return <div className="modal">
		<div className="modalContent form">
			<h2>{translate(Texts.categoryTree.inviteUser.title)}</h2>
			{invitedUsernames.length > 0 ?
				<div className="line">
					<h3>{translate(Texts.categoryTree.inviteUser.alreadyInvited)}</h3>
					<ul>{invitedUsernames}</ul>
				</div> :
				null
			}
			<div className="line">
				<input
					type="text"
					onChange={(event) => props.invitedUsernameChanged(event.target.value)}
					autoComplete="off"
					value={props.usernameSearchString}
					placeholder={translate(Texts.categoryTree.inviteUser.username)}
				/>
			</div>
			{usernames.length > 0 ?
				<div className="line">
					<ul>{usernames}</ul>
				</div> :
				null
			}
			<button onClick={props.cancelInviteUser}>{translate(Texts.categoryTree.inviteUser.cancel)}</button>
		</div>
	</div>
}



/******* S.D.G. *******/



