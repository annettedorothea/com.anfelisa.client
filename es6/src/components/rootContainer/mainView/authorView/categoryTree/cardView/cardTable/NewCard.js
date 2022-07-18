/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/


import React from "react";
import {translate} from "../../../../../../../AppUtils";
import {Texts} from "../../../../../../../app/Texts";

export const NewCard = (props) => {

    if (props.rootCategory && !props.rootCategory.editable) {
        return null
    }

    const onAltKeyUp = (e) => {
        e.preventDefault();
        if (e.keyCode === 13 && e.altKey && isValid()) {
            onCreate();
        }
        if (e.keyCode === 27) {
            onCancel();
        }
    }

    const onCreate = () => {
        props.createCard().then(() => {
            document.getElementById(props.naturalInputOrder === true ? "given" : "wanted").focus();
        });
    }

    const onCancel = () => {
        props.cancelNewCard();
        document.getElementById(props.naturalInputOrder === true ? "given" : "wanted").focus();
    }

    const onBlurGiven = () => {
        if (props.naturalInputOrder === true && !!props.rootCategory.dictionaryLookup && (!props.wanted || props.wanted.length === 0)) {
            props.passValueToDictionary();
        }
        if (props.naturalInputOrder === true && props.rootCategory.dictionaryLookup === true) {
            props.translate().then();
        }
    }

    const onBlurWanted = () => {
        if (props.naturalInputOrder === false && !!props.rootCategory.dictionaryLookup && (!props.given || props.given.length === 0)) {
            props.passValueToDictionary();
        }
        if (props.naturalInputOrder === false && props.rootCategory.dictionaryLookup === true) {
            props.translate().then();
        }
    }

    const renderGiven = () => {
        return <td className="textarea input">
            <textarea
                onChange={(event) => props.givenOfNewCardChanged(event.target.value)}
                autoComplete="off"
                value={props.given}
                placeholder={`${translate(Texts.cardList.given)} ${props.rootCategory.dictionaryLookup ? "(" + translate(Texts.categoryList.languages[props.rootCategory.givenLanguage]) + ")" : ""}`}
                onKeyUp={onAltKeyUp}
                onBlur={onBlurGiven}
                id="given"
            />
        </td>
    }

    const renderWanted = () => {
        return <td className="textarea input">
            <textarea
                onChange={(event) => props.wantedOfNewCardChanged(event.target.value)}
                autoComplete="off"
                value={props.wanted}
                placeholder={`${translate(Texts.cardList.wanted)} ${props.rootCategory.dictionaryLookup ? "(" + translate(Texts.categoryList.languages[props.rootCategory.wantedLanguage]) + ")" : ""}`}
                onKeyUp={onAltKeyUp}
                onBlur={onBlurWanted}
                id="wanted"
            />
        </td>
    }

    const isValid = () => {
        return props.given && props.given.length > 0 && props.wanted && props.wanted.length > 0;
    }
    return <tr className="notPrinted inputRow">
        <td/>
        {props.naturalInputOrder === true ? renderGiven() : renderWanted()}
        {props.naturalInputOrder === true ? renderWanted() : renderGiven()}
        <td className="top">
            {props.displaySpinner ? <i className="fas fa-cog fa-spin"/> : null}
        </td>
        <td className="noBreak input">
            <button
                disabled={!isValid()}
                onClick={onCreate}
            >
                <i className="fas fa-check"/>
            </button>
            <button
                onClick={onCancel}
            >
                <i className="fas fa-times"/>
            </button>
        </td>
    </tr>

}


/******* S.D.G. *******/



