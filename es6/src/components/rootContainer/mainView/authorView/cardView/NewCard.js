/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import React, {useState, useEffect} from "react";
import {
	cancelNewCard,
	createCard,
	givenOfNewCardChanged,
	passValueToDictionary,
	translate,
	wantedOfNewCardChanged
} from "../../../../../../gen/card/ActionFunctions";
import {Texts} from "../../../../../app/Texts";


export const NewCard = (props) => {

	const [given, setGiven] = useState("");
	const [wanted, setWanted] = useState("");

	useEffect(() => {
		setGiven(props.given)
	}, [props.given])

	useEffect(() => {
		setWanted(props.wanted)
	}, [props.wanted])

	const onAltKeyUp = (e) => {
		e.preventDefault();
		if (e.keyCode === 13 && e.altKey && isValid()) {
			onCreate();
		}
		if (e.keyCode === 27) {
			onCancel();
		}
	}

	const onChange = (e, action) => {
		if (e.keyCode !== 13 && !e.altKey) {
			action(e.target.value);
		}
	}

	const onCreate = () => {
		reset();
		createCard();
		document.getElementById(props.naturalInputOrder === true ? "given" : "wanted").focus();
	}

	const onCancel = () => {
		reset();
		cancelNewCard();
		document.getElementById(props.naturalInputOrder === true ? "given" : "wanted").focus();
	}

	const onBlurGiven = () => {
		if (props.naturalInputOrder === true && !!props.dictionaryLookup && (!props.wanted || props.wanted.length === 0)) {
			passValueToDictionary();
		}
		if (props.naturalInputOrder === true && props.dictionaryLookup === true) {
			translate();
		}
	}

	const onBlurWanted = () => {
		if (props.naturalInputOrder === false && !!props.dictionaryLookup && (!props.given || props.given.length === 0)) {
			passValueToDictionary();
		}
		if (props.naturalInputOrder === false && props.dictionaryLookup === true) {
			translate();
		}
	}

	const onChangeGiven = (e) => {
		setGiven(e.target.value);
		onChange(e, givenOfNewCardChanged);
	}

	const onChangeWanted = (e) => {
		setWanted(e.target.value);
		onChange(e, wantedOfNewCardChanged);
	}

	const reset = () => {
		setGiven("");
		setWanted("");
	}

	const renderGiven = () => {
		return <td className="textarea input">
            <textarea
				onChange={onChangeGiven}
				autoComplete="off"
				value={given}
				placeholder={`${Texts.cardList.given[props.language]} ${props.dictionaryLookup ? "(" + Texts.categoryList.languages[props.givenLanguage][props.language] + ")" : ""}`}
				onKeyUp={onAltKeyUp}
				onBlur={onBlurGiven}
				id="given"
			/>
		</td>
	}

	const renderWanted = () => {
		return <td className="textarea input">
            <textarea
				onChange={onChangeWanted}
				autoComplete="off"
				value={wanted}
				placeholder={`${Texts.cardList.wanted[props.language]} ${props.dictionaryLookup ? "(" + Texts.categoryList.languages[props.wantedLanguage][props.language] + ")" : ""}`}
				onKeyUp={onAltKeyUp}
				onBlur={onBlurWanted}
				id="wanted"
			/>
		</td>
	}

	const isValid = () => {
		return props.given && props.given.length > 0 && (props.wanted && props.wanted.length > 0);
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



