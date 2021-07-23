/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import React from "react";
import {Texts} from "../../../app/Texts";
import {displayWanted, scoreCard, scoreReinforceCard, sortCardOut} from "../../../../gen/box/ActionFunctions";
import {route} from "../../../../gen/common/ActionFunctions";


export const QueryCardView = (props) => {
	const progress = () => {
		const open = Math.round(props.openTodaysCards / props.allTodaysCards * 100);
		const done = 100 - open;
		return <div className="progress">
			<div
				className={`${done === 100 ? 'all-done' : 'done'}`}
				style={{width: `${done}%`}}
			/>
			<div
				className={`${open === 100 ? 'all-open' : 'open'}`}
				style={{width: `${open}%`}}
			/>
		</div>
	}

	const card = () => {
		const given = () => {
			let lines = [];
			if (props.given.length > 0) {
				lines = props.given.split("\n");
			}

			let lineItems = [];
			for (let i = 0; i < lines.length; i++) {
				lineItems.push(<div key={`line${i}`}>{lines[i]}</div>)
			}
			return <div className={`given lastQuality_${props.lastQuality}`}>
				<div className="given-word">{lineItems}</div>
				{props.scheduledDate ? <div className="small-info">
					{`${Texts.queryCards.scheduledDate[props.language]} ${new Date(props.scheduledDate).toLocaleDateString()}`}
				</div> : null}
				<div className="small-info">{
					props.count === 0 ?
						Texts.queryCards.never[props.language] :
						Texts.queryCards.count[props.language].replace("{0}", props.count)}
				</div>
				{props.scoredDate ? <div className="small-info">
					{`${Texts.queryCards.scoredDate[props.language]} ${new Date(props.scoredDate).toLocaleDateString()}`}
				</div> : null}
			</div>
		}

		const wanted = () => {
			let lines = [];
			if (props.wanted.length > 0) {
				lines = props.wanted.split("\n");
			}

			const onClick = () => {
				const wantedItemsLength = lines.length;
				displayWanted(wantedItemsLength);
			}

			let lineItems = [];
			for (let i = 0; i < lines.length; i++) {
				lineItems.push(<div
					key={`line${i}`}
					className={i < props.index ? "" : "hidden"}
				>{lines[i]}</div>);
			}
			return <div className={`wanted lastQuality_${props.lastQuality}`}>
				<div
					className="wanted-word"
					onClick={onClick}
				>{lineItems}</div>
			</div>
		}

		const scoreButtonClick = (quality) => {
			if (props.scheduledCardId) {
				scoreCard(quality);
			} else {
				scoreReinforceCard(quality);
			}
		}

		const scoreButton = (quality) => {
			return <button
				onClick={() => scoreButtonClick(quality)}
				disabled={!props.enableScoreButtons}
				className={`quality_${quality}`}
			>
				{Texts.queryCards.scoreButtons[quality][props.language]}
			</button>
		}

		const reinforceButton = (keep) => {
			return <button
				onClick={() => scoreReinforceCard(keep)}
				disabled={!props.enableScoreButtons}
				className={`keep_${keep}`}
			>
				{Texts.queryCards.reinforceButtons[keep][props.language]}
			</button>
		}

		return <div>
			{given()}
			{wanted()}
			{props.scheduledCardId ?
				<div className="scoreButtons">
					<div>
						{scoreButton(5)}
						{scoreButton(2)}
					</div>
					<div>
						{scoreButton(4)}
						{scoreButton(1)}
					</div>
					<div>
						{scoreButton(3)}
						{scoreButton(0)}
					</div>
					<div>
						<button onClick={sortCardOut}>
							{Texts.queryCards.sortOut[props.language]}
						</button>
					</div>
				</div> :
				<div className="scoreButtons">
					<div>
						{reinforceButton(false)}
						{reinforceButton(true)}
					</div>
					<div>
						<button onClick={sortCardOut}>
							{Texts.queryCards.sortOut[props.language]}
						</button>
					</div>
				</div>}
			<div className="categoryLink">
				<a
					onClick={() => route(`#categories/${props.rootCategoryId}${props.categoryId !== props.rootCategoryId ? "/" + props.categoryId : ""}${props.reverse === true ? "/reverse" : ""}`)}
				>{Texts.queryCards.category[props.language]}</a>
			</div>
		</div>
	}

	return <div className="box">
		<h1>
			<button
				className="backButton"
				onClick={() => route("#dashboard")}
			>
				<i className="fa fa-arrow-left"/>
			</button>
			<span>{props.categoryName} {props.reverse ?
				<i className="fas fa-arrows-alt-h withmarginleft"/> : null}</span>
		</h1>
		{progress()}
		{props.openTodaysCards > 0 ? card() : null}
	</div>
}

/******* S.D.G. *******/



