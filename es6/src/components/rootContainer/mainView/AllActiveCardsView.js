/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/


import React from "react";
import {translate} from "../../../AppUtils";
import {Texts} from "../../../app/Texts";
import './allActiveCards.scss'

export const AllActiveCardsView = (props) => {
    if (!props.activeCardList || !props.selectedCardIds) {
        return null;
    }
    const filterLastQuality = (lastQuality) => {
        return <>
            <input
                type="checkbox"
                onClick={() => props.filterActiveCardListWithLastQualityChanged(lastQuality)}
                id={`lastQuality_${lastQuality}`}
                value={props.selectedLastQualityFilters.indexOf(lastQuality) >= 0}
                hidden
            />
            <label
                htmlFor={`lastQuality_${lastQuality}`}
                className={`quality_${lastQuality}`}
            >
                {translate(Texts.allActiveCards.filterLastQuality[lastQuality])}
            </label>
        </>

    }
    return <div className="allActiveCards">
        <div className="toolbarContainer">
            <input
                type="checkbox"
                onChange={props.toggleAllScheduleCardSelection}
                checked={props.activeCardList.filter(i => i.hide !== true).length > 0 && props.selectedCardIds.length === props.activeCardList.filter(i => i.hide !== true).length}
            />
            <div className="buttons">
                <div className="buttonContainer">
                    <button
                        onClick={props.scheduleSelectedCards}
                        disabled={props.selectedCardIds.length === 0}
                        title={translate(Texts.allActiveCards.scheduleSelectedCards)}
                    >
                        <i className="far fa-calendar-plus"></i>
                    </button>
                    <button
                        onClick={props.sortSelectedCardsOut}
                        disabled={props.selectedCardIds.length === 0}
                        title={translate(Texts.allActiveCards.sortSelectedCardsOut)}
                    >
                        <i className="far fa-calendar-minus"></i>
                    </button>
                </div>
            </div>
            <div className="qualities">
                {filterLastQuality(5)}
                {filterLastQuality(4)}
                {filterLastQuality(3)}
                {filterLastQuality(2)}
                {filterLastQuality(1)}
                {filterLastQuality(0)}
            </div>
        </div>
        {props.children}
    </div>
}


/******* S.D.G. *******/



