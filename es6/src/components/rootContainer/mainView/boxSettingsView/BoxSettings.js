/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/


import React from "react";
import {Texts} from "../../../../app/Texts";
import {
    createRootCategory,
    dictionaryLookupChanged, givenLanguageChanged,
    maxCardsPerDayChanged,
    maxIntervalChanged,
    rootCategoryNameChanged, saveBoxSettings, wantedLanguageChanged
} from "../../../../../gen/box/ActionFunctions";
import {route} from "../../../../../gen/common/ActionFunctions";
import {translate} from "../../../../AppUtils";


export const BoxSettings = (props) => {
    const getCardInfo = () => {
        if (props.allCards === 0) {
            return ""
        }
        if (props.allActiveCards === 0 && props.allCards === 1) {
            return translate(Texts.boxSettings.cardInfoZeroOne);
        }
        if (props.allActiveCards === 1 && props.allCards === 1) {
            return translate(Texts.boxSettings.cardInfoOneOne);
        }
        if (props.allActiveCards === 1 && props.allCards === 1) {
            return translate(Texts.boxSettings.cardInfoOneOne);
        }
        if (props.allActiveCards === 0) {
            return translate(Texts.boxSettings.cardInfoZero, [props.allCards]);
        }
        if (props.allActiveCards === 1) {
            return translate(Texts.boxSettings.cardInfoOne, [props.allCards]);
        }
        return translate(Texts.boxSettings.cardInfo, [props.allActiveCards, props.allCards]);
    }

    const getCardStatusWarning = () => {
        const possibleCards = props.maxCardsPerDay * props.maxInterval;
        if (possibleCards === 1) {
            return translate(Texts.boxSettings.tooManyCardsWarningOne, [props.allActiveCards]);
        }
        return translate(Texts.boxSettings.tooManyCardsWarning, [possibleCards,  props.allActiveCards])
    }

    const getCardStatusInfo = () => {
        const possibleCards = props.maxCardsPerDay * props.maxInterval;
        if (possibleCards === 1 && props.allActiveCards === 1) {
            return translate(Texts.boxSettings.boxInfoOneOne);
        }
        if (props.allActiveCards === 1) {
            return translate(Texts.boxSettings.boxInfoOne).replace("{0}", possibleCards);
        }
        return translate(Texts.boxSettings.boxInfo).replace("{0}", possibleCards).replace("{1}", props.allActiveCards)
    }

    if (props.categoryName === undefined) {
        return null;
    }

    return <div className="center-wide">
        <div className="form">
            <h1>{translate(Texts.boxSettings.title)}</h1>
            {props.allCards > 0 ? <h2>{getCardInfo()}</h2> : null}
            {props.tooManyCardsStatus === 2 && props.maxCardsPerDayInvalid !== true && props.maxIntervalInvalid !== true ?
                <div className="line warning">{getCardStatusWarning()}</div> :
                null
            }
            {props.tooManyCardsStatus === 1 && props.maxCardsPerDayInvalid !== true && props.maxIntervalInvalid !== true ?
                <div className="line info">{getCardStatusInfo()}</div> :
                null
            }
            <div className="line">
                <label htmlFor="categoryName">
                    {translate(Texts.boxSettings.categoryName)}
                </label>
                <div className="inputContainer">
                    <input
                        onChange={(e) => rootCategoryNameChanged(e.target.value)}
                        type="text"
                        value={props.categoryName}
                        id="categoryName"
                        disabled={props.shared}
                    />
                    {!props.categoryName ? <i className="fas fa-times outside error"/> : null}
                </div>
            </div>
            <div className="line">
                <label htmlFor="maxCardsPerDay">
                    {translate(Texts.boxSettings.maxCardsPerDay)}
                </label>
                <div className="inputContainer">
                    <input
                        onChange={(e) => maxCardsPerDayChanged(e.target.value)}
                        type="text"
                        value={props.maxCardsPerDay}
                        id="maxCardsPerDay"
                    />
                    {props.maxCardsPerDayInvalid === true ? <i className="fas fa-times outside error"/> : null}
                </div>
            </div>
            <div className="line">
                <label htmlFor="maxInterval">
                    {translate(Texts.boxSettings.maxInterval)}
                </label>
                <div className="inputContainer">
                    <input
                        onChange={(e) => maxIntervalChanged(e.target.value)}
                        type="text"
                        value={props.maxInterval}
                        id="maxInterval"
                    />
                    {props.maxIntervalInvalid === true ? <i className="fas fa-times outside error"/> : null}
                </div>
            </div>
            <div className="noBreak line">
                <input
                    onChange={dictionaryLookupChanged}
                    type="checkbox"
                    value={props.dictionaryLookup}
                    checked={props.dictionaryLookup}
                    id="dictionaryLookupEditCheckbox"
                    disabled={props.shared}
                />
                <select
                    onChange={(e) => givenLanguageChanged(e.target.value)}
                    value={props.givenLanguage}
                    disabled={!props.dictionaryLookup || props.shared}
                    id="givenLanguage"
                >
                    <option value="">{translate(Texts.boxSettings.languages.emtpyFrom)}</option>
                    <option value="de">{translate(Texts.boxSettings.languages.de)}</option>
                    <option value="en">{translate(Texts.boxSettings.languages.en)}</option>
                    <option value="fr">{translate(Texts.boxSettings.languages.fr)}</option>
                </select>
                <select
                    onChange={(e) => wantedLanguageChanged(e.target.value)}
                    value={props.wantedLanguage}
                    disabled={!props.dictionaryLookup || props.shared}
                    id="wantedLanguage"
                >
                    <option value="">{translate(Texts.boxSettings.languages.emtpyTo)}</option>
                    <option value="de">{translate(Texts.boxSettings.languages.de)}</option>
                    <option value="en">{translate(Texts.boxSettings.languages.en)}</option>
                    <option value="fr">{translate(Texts.boxSettings.languages.fr)}</option>
                </select>
                {props.dictionaryLookupInvalid === true ? <i className="fas fa-times outside error"/> : null}
            </div>
            <div className="moreMarginLine hCenter">
                <button
                    id="save"
                    onClick={() => props.boxId ? saveBoxSettings() : createRootCategory()}
                    disabled={(props.maxCardsPerDayInvalid ||
                        props.maxIntervalInvalid ||
                        props.dictionaryLookupInvalid ||
                        !props.categoryName ||
                        !props.categoryName.trim())}
                >
                    {translate(Texts.boxSettings.save)}
                </button>
                <button
                    id="cancel"
                    onClick={() => route("#dashboard")}>{translate(Texts.boxSettings.cancel)}</button>
            </div>
        </div>
    </div>
}


/******* S.D.G. *******/



