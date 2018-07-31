import React from 'react';
import PostponeCardsOfBoxAction from "../../box/actions/PostponeCardsOfBoxAction";

export default class DaysBehindSchedule extends React.Component {

    constructor(props) {
        super(props);
        this.onPostpone = this.onPostpone.bind(this);
    }

    onPostpone() {
        const data = {
            boxId: this.props.boxId,
            loadList: this.props.loadList
        };
        new PostponeCardsOfBoxAction(data).apply();
    }

    render() {
        if (!this.props.daysBehindSchedule || this.props.daysBehindSchedule <= 0) {
            return "";
        }
        let message = "";
        if (this.props.daysBehindSchedule === 1) {
            message = this.props.texts.box.daysBehindScheduleMessageOne[this.props.language];
        } else {
            message = this.props.texts.box.daysBehindScheduleMessage[this.props.language].replace("{0}", this.props.daysBehindSchedule);
        }
        return <div>{message}
            <button onClick={this.onPostpone}>{this.props.texts.box.postpone[this.props.language]}</button>
        </div>;
        s
    }
}

