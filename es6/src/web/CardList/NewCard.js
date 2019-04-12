import React from "react";
import Preview from "./Preview";
import FileInput from "./FileInput";
import {displayError} from "../../../gen/common/ActionFunctions";
import {
    cancelNewCard,
    createCard,
    givenOfNewCardChanged,
    loadWantedImageOfNewCard,
    passValueToDictionary,
    removeNewCardImage,
    translate,
    wantedOfNewCardChanged
} from "../../../gen/card/ActionFunctions";

export default class NewCard extends React.Component {

    constructor(props) {
        super(props);
        this.onNewCard = this.onNewCard.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onAltKeyUp = this.onAltKeyUp.bind(this);
        this.onBlurGiven = this.onBlurGiven.bind(this);
        this.onBlurWanted = this.onBlurWanted.bind(this);
        this.onWantedFileChange = this.onWantedFileChange.bind(this);
    }

    setFocus() {
        if (this.props.naturalInputOrder === true) {
            if (!this.props.given || this.props.given.length === 0) {
                this.setFocusGiven();
            } else {
                this.setFocusWanted();
            }
        } else {
            if (!this.props.wanted || this.props.wanted.length === 0) {
                this.setFocusWanted();
            } else {
                this.setFocusGiven();
            }
        }
    }

    setFocusByInputOrder() {
        if (this.props.naturalInputOrder === true) {
            this.setFocusGiven();
        } else {
            this.setFocusWanted();
        }
    }

    setFocusGiven() {
        if (this.givenInput) {
            this.givenInput.focus();
        }
    }

    setFocusWanted() {
        if (this.wantedInput) {
            this.wantedInput.focus();
        }
    }

    onWantedFileChange(event) {
        let files = event.target.files;

        if (files.length > 0) {
            const file = files[0];
            event.target.value = null;
            if (!file.type.match('image.*')) {
                displayError({errorKey: "noImageFile"});
                return;
            }
            if (file.size > 2000000) {
                displayError({errorKey: "fileTooBig"});
                return;
            }
            const reader = new FileReader();
            reader.onload = function (e) {
                loadWantedImageOfNewCard(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    }

    onCancel() {
        cancelNewCard();
        this.setFocusByInputOrder();
    }

    onNewCard() {
        createCard();
        this.setFocusByInputOrder();
    }

    onBlurGiven() {
        if (this.props.naturalInputOrder === true && this.props.useDictionary === true && (!this.props.wanted || this.props.wanted.length === 0)) {
            passValueToDictionary();
        }
        if (this.props.naturalInputOrder === true && this.props.dictionaryLookup === true) {
            translate();
        }
    }

    onBlurWanted() {
        if (this.props.naturalInputOrder === false && this.props.useDictionary === true && (!this.props.given || this.props.given.length === 0)) {
            passValueToDictionary();
        }
        if (this.props.naturalInputOrder === false && this.props.dictionaryLookup === true) {
            translate();
        }
    }

    onAltKeyUp(e) {
        e.preventDefault();
        if (e.keyCode === 13 && e.altKey && this.isValid()) {
            this.onNewCard();
        }
    }

    renderGiven(renderGoogleLogo) {
        return (
            <td className="textarea input">
                <textarea
                    onChange={(event) => givenOfNewCardChanged(event.target.value)}
                    autoComplete="off"
                    value={this.props.given}
                    placeholder={`${this.props.texts.cardList.given[this.props.language]} ${this.props.dictionaryLookup ? "(" + this.props.texts.categoryList.languages[this.props.givenLanguage][this.props.language] + ")" : ""}`}
                    ref={textarea => {
                        this.givenInput = textarea;
                    }}
                    onKeyUp={this.onAltKeyUp}
                    onBlur={this.onBlurGiven}
                    id="given"
                />
                {renderGoogleLogo === true &&
                <div className="google">
                    {(this.props.displayTranslateSpinner === true || this.props.displaySpinner === true) &&
                    <i className="fas fa-cog fa-spin"/>}
                </div>}
            </td>
        )
    }

    renderWanted(renderGoogleLogo) {
        return (
            <td className="textarea input">
                <textarea
                    onChange={(event) => wantedOfNewCardChanged(event.target.value)}
                    autoComplete="off"
                    value={this.props.wanted}
                    placeholder={`${this.props.texts.cardList.wanted[this.props.language]} ${this.props.dictionaryLookup ? "(" + this.props.texts.categoryList.languages[this.props.wantedLanguage][this.props.language] + ")" : ""}`}
                    ref={textarea => {
                        this.wantedInput = textarea;
                    }}
                    onKeyUp={this.onAltKeyUp}
                    onBlur={this.onBlurWanted}
                    id="wanted"
                />
                {renderGoogleLogo === true &&
                <div className="google">
                    {(this.props.displayTranslateSpinner === true || this.props.displaySpinner === true) &&
                    <i className="fas fa-cog fa-spin"/>}
                </div>}
            </td>
        )
    }

    renderImage() {
        if (this.props.image.length > 0) {
            return <Preview
                image={this.props.image}
                onRemoveImage={() => removeNewCardImage()}
            />
        }
        return (
            <FileInput
                onWantedFileChange={this.onWantedFileChange}
                file={this.props.file}
                texts={this.props.texts}
                language={this.props.language}
            />
        )
    }

    isValid() {
        return this.props.given.length > 0 && (this.props.wanted.length > 0 || this.props.image.length > 0);
    }

    render() {
        return (
            <tr className="notPrinted inputRow">
                <td/>
                {this.props.naturalInputOrder === true && this.renderGiven()}
                {this.props.naturalInputOrder === true && this.renderWanted(this.props.dictionaryLookup)}
                {this.props.naturalInputOrder === true && this.renderImage()}
                {this.props.naturalInputOrder === false && this.renderWanted()}
                {this.props.naturalInputOrder === false && this.renderGiven(this.props.dictionaryLookup)}
                {this.props.naturalInputOrder === false && this.renderImage()}
                <td className="noBreak input">
                    <button
                        disabled={!this.isValid()}
                        onClick={this.onNewCard}>
                        <i className="fas fa-check"/>
                    </button>
                    <button
                        onClick={this.onCancel}>
                        <i className="fas fa-times"/>
                    </button>
                </td>
                {this.props.hasBox === true && <td/>}
            </tr>
        );
    }
}

