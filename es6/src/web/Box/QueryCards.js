import React from 'react';
import Card from "./Card";
import RouteAction from "../../common/actions/RouteAction";
import Progress from "./Progress";

export default class QueryCards extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const open = Math.round(this.props.openTodaysCards / this.props.allTodaysCards * 100);
        return <div className="box">

            <h1>
                <button
                    className="backButton"
                    onClick={() => new RouteAction("#dashboard").apply()}><i className="fa fa-arrow-left"/>
                </button>
                <span>{this.props.categoryName} {this.props.reverse === true && <i className="fas fa-arrows-alt-h"/>}</span>
            </h1>

            <Progress openTodaysCards={this.props.openTodaysCards} allTodaysCards={this.props.allTodaysCards}/>

            {open > 0 && <Card {...this.props}/>}

        </div>
    }
}

