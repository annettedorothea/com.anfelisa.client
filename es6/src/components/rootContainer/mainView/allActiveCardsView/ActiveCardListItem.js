// noinspection JSUnresolvedVariable

/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import React from "react";
import {toggleScheduleCardSelection, updateCardPriority} from "../../../../../gen/box/ActionFunctions";
import {Texts} from "../../../../app/Texts";


export const ActiveCardListItem = (props) => {
	const priority = () => {
		const priorityChanged = (priority) => {
			if (props.editable) {
				updateCardPriority(props.cardId, priority);
			}
		}
		const priorityClass = (index) => {
			if (props.priority && index <= props.priority) {
				return "fa fa-star";
			}
			return "far fa-star";
		}
		return <td className="priority noBreak">
			<i
				className={priorityClass(1)}
				onClick={props.editable ?
					() => priorityChanged(props.priority === 1 ? null : 1) :
					() => {
					}
				}
			/>
			<i
				className={priorityClass(2)}
				onClick={props.editable ?
					() => priorityChanged(props.priority === 2 ? null : 2) :
					() => {
					}
				}
			/>
			<i
				className={priorityClass(3)}
				onClick={props.editable ?
					() => priorityChanged(props.priority === 3 ? null : 3) :
					() => {
					}
				}
			/>
		</td>
	}

	const thumbsUp = () => {
		if (props.ef > 2.5) {
			return <div>
				<i className="far fa-thumbs-up"/>
				<i className="far fa-thumbs-up"/>
				<i className="far fa-thumbs-up"/>
			</div>
		}
		if (props.ef > 2.0) {
			return <div>
				<i className="far fa-thumbs-up"/>
				<i className="far fa-thumbs-up"/>
			</div>
		}
		return <div>
			<i className="far fa-thumbs-up"/>
		</div>
	}
	return <tr key={props.cardId}>
		<td className="notPrinted">
			<input
				type="checkbox"
				onChange={() => toggleScheduleCardSelection(props.cardId)}
				checked={props.selectedCardIds.indexOf(props.cardId) >= 0}
			/>
		</td>
		<td className="visibleMobile">
			<pre>{props.given}</pre>
		</td>
		<td className="visibleMobile">
			<pre>{props.wanted}</pre>
		</td>
		{priority()}
		<td className="noBreak visibleMobile alignRight">
			{props.next ? new Date(props.next).toLocaleDateString() : ""}
		</td>
		<td className={`visibleMobile noBreak thumbsUp quality_${props.lastQuality}`}>
			{thumbsUp()}
		</td>
		<td className="noBreak visibleMobile alignRight">
			{Texts.allActiveCards.count[props.language].replace("{0}", props.count)}
		</td>
		<td className="noBreak visibleMobile alignRight">
			{props.interval === 1 ?
				Texts.allActiveCards.intervalOne[props.language] :
				Texts.allActiveCards.interval[props.language].replace("{0}", props.interval)
			}
		</td>
	</tr>
}



/******* S.D.G. *******/



