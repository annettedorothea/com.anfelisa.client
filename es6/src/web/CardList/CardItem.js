import React from "react";
import {
    deleteCardClick,
    editCard,
    moveCardsStarted,
    toggleScheduleCardSelection
} from "../../../gen/card/ActionFunctions";

export default class CardItem extends React.Component {

    constructor(props) {
        super(props);
        this.onDragStart = this.onDragStart.bind(this);
    }

    onDragStart(event) {
        event.dataTransfer.setData("Text", this.props.given);
        moveCardsStarted();
    }

    renderGiven(first) {
        return (
            <td onDoubleClick={this.props.editable === true ? () => editCard(this.props.cardId) : () => {
            }} className={first ? "visibleMobile" : "notVisibleMobile"}>
                <pre>{this.props.given}</pre>
            </td>
        );
    }

    renderWanted(first) {
        return (
            <td onDoubleClick={this.props.editable === true ? () => editCard(this.props.cardId) : () => {
            }} className={first ? "visibleMobile" : "notVisibleMobile"}>
                <pre>{this.props.wanted}</pre>
            </td>
        );
    }

    renderImage() {
        return (
            <td
                className="preview notVisibleMobile"
                onDoubleClick={
                    this.props.editable === true ? () => editCard(this.props.cardId) : () => {
                    }
                }
            >
                <img src={this.props.image}/>
            </td>
        );
    }

    render() {
        return (
            <tr>
                <td className="notPrinted">
                    <input
                        type={"checkbox"}
                        onChange={() => toggleScheduleCardSelection(this.props.cardId)}
                        checked={this.props.selectedCardIds.indexOf(this.props.cardId) >= 0}
                    />
                </td>
                {this.props.naturalInputOrder === true && this.renderGiven(true)}
                {this.props.naturalInputOrder === true && this.renderWanted(false)}
                {this.props.naturalInputOrder === true && this.renderImage()}
                {this.props.naturalInputOrder === false && this.renderWanted(true)}
                {this.props.naturalInputOrder === false && this.renderGiven(false)}
                {this.props.naturalInputOrder === false && this.renderImage()}
                <td className="noBreak notPrinted">
                    {this.props.editable === true &&
                    <button onClick={() => editCard(this.props.cardId)}>
                        <i className="fas fa-pen"/>
                    </button>}
                    {this.props.editable === true &&
                    <button onClick={() => deleteCardClick(this.props.cardId)}>
                        <i className="fas fa-times"/>
                    </button>}
                    {this.props.editable === true && this.props.selectedCardIds.indexOf(this.props.cardId) >= 0 &&
                    <i id={this.props.cardId} className="fas fa-align-justify" draggable="true"
                       onDragStart={(event) => this.onDragStart(event)}/>
                    }
                </td>
                {this.props.hasBox &&
                <td className="notPrinted">
                    {this.props.next ? new Date(this.props.next).toLocaleDateString() : ""}
                </td>
                }
            </tr>
        );
    }
}

