/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import React from "react";

import { ActiveCardListItem } from "./allActiveCardsView/ActiveCardListItem";
import {
	filterActiveCardListWithLastQualityChanged,
	scheduleSelectedCards,
	sortSelectedCardsOut,
	toggleAllScheduleCardSelection
} from "../../../../gen/box/ActionFunctions";
import {Texts} from "../../../app/Texts";

export const AllActiveCardsView = (props) => {
	if (!props.activeCardList || !props.selectedCardIds) {
		return null;
	}
	const cardItems = props.activeCardList.map((card, index) => {
		return <ActiveCardListItem
			{...card}
			key={`card_${index}`}
			selectedCardIds={props.selectedCardIds}
			editable={props.editable}
			language={props.language}
		/>
	});
	const filterLastQuality = (lastQuality) => {
		return <div className="form">
			<input
				type="checkbox"
				onClick={() => filterActiveCardListWithLastQualityChanged(lastQuality)}
				id={`lastQuality{lastQuality}`}
				value={props.selectedLastQualityFilters.indexOf(lastQuality) >= 0}
			/>
			<label
				htmlFor={`lastQuality{lastQuality}`}
				className={`quality_${lastQuality}`}
			>
				{Texts.allActiveCards.filterLastQuality[lastQuality][props.language]}
			</label>
		</div>

	}
	return <div className="allActiveCards">
		<div>
			{filterLastQuality(5)}
			{filterLastQuality(4)}
			{filterLastQuality(3)}
			{filterLastQuality(2)}
			{filterLastQuality(1)}
			{filterLastQuality(0)}
		</div>
		<table>
			<thead>
			<tr className="notPrinted">
				<th>
					<input
						type="checkbox"
						onChange={toggleAllScheduleCardSelection}
						checked={props.activeCardList.filter(i => i.hide !== true).length > 0 && props.selectedCardIds.length === props.activeCardList.filter(i => i.hide !== true).length}
					/>
				</th>
				<th colSpan={4}>
					<button
						onClick={scheduleSelectedCards}
						disabled={props.selectedCardIds.length === 0}
					>
						{Texts.allActiveCards.scheduleSelectedCards[props.language]}
					</button>
					<button
						onClick={sortSelectedCardsOut}
						disabled={props.selectedCardIds.length === 0}
					>
						{Texts.allActiveCards.sortSelectedCardsOut[props.language]}
					</button>
				</th>
			</tr>
			</thead>
			<tbody>
			{cardItems}
			</tbody>
		</table>
	</div>
}



/******* S.D.G. *******/



