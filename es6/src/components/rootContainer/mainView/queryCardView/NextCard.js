/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/


import React from "react";
import {translate} from "../../../../AppUtils";
import {Texts} from "../../../../app/Texts";


export const NextCard = (props) => {

    if (!props.given || !props.wanted || props.openTodaysCards === 0) {
        return null;
    }

    const given = () => {
        let lines = [];
        const isImage = props.given.indexOf("data:image") === 0;
        if (props.given.length > 0) {
            lines = props.given.split("\n");
        }

        let lineItems = [];
        for (let i = 0; i < lines.length; i++) {
            lineItems.push(<div key={`line${i}`}>{lines[i]}</div>)
        }
        return <div className={`given lastQuality_${props.lastQuality}`}>
            <div className="given-word">{isImage ? <img src={props.given} alt="image"/> : lineItems}</div>
            <div className="small-info">{
                props.count === 0 ?
                    translate(Texts.queryCards.never) :
                    translate(Texts.queryCards.count, [props.count])}
            </div>
            {props.scoredDate ? <div className="small-info">
                {`${translate(Texts.queryCards.scoredDate)} ${new Date(props.scoredDate).toLocaleDateString()}`}
            </div> : null}
        </div>
    }

    const wanted = () => {
        let lines = [];
        let lineItems = [];

        if (props.wanted.indexOf("data:image") === 0) {
            lines.push(props.wanted)
            lineItems.push(<img key="image" src={props.wanted} alt="image" className={0 < props.index ? "" : "hidden"}/>);
        } else {
            if (props.wanted.length > 0) {
                lines = props.wanted.split("\n");
            }
            for (let i = 0; i < lines.length; i++) {
                lineItems.push(<div
                    key={`line${i}`}
                    className={i < props.index ? "" : "hidden"}
                >{lines[i]}</div>);
            }
        }

        const onClick = () => {
            const wantedItemsLength = lines.length;
            props.displayWanted(wantedItemsLength);
        }

        return <div className={`wanted lastQuality_${props.lastQuality}`} onClick={onClick} id="wanted">
            <div
                className="wanted-word"
            >
                {lineItems}
            </div>
        </div>
    }

    const scoreButtonClick = (quality) => {
        props.scoreCard(quality).then();
    }

    const scoreButton = (quality) => {
        return <button
            onClick={() => scoreButtonClick(quality)}
            disabled={props.disableScoreButtons}
            className={`quality_${quality}`}
            id={`score_${quality}`}
        >
            {translate(Texts.queryCards.scoreButtons[quality])}
        </button>
    }

    const reinforceButton = (keep) => {
        return <button
            onClick={() => props.scoreReinforceCard(keep)}
            disabled={props.disableScoreButtons}
            className={`keep_${keep}`}
            id={`keep_${keep}`}
        >
            {translate(Texts.queryCards.reinforceButtons[keep])}
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
                    <button
                        onClick={props.sortCardOut}
                        disabled={props.disableSortOutButton}
                    >
                        {translate(Texts.queryCards.sortOut)}
                    </button>
                </div>
            </div> :
            <div className="scoreButtons">
                <div>
                    {reinforceButton(false)}
                    {reinforceButton(true)}
                </div>
                <div>
                    <button
                        onClick={props.sortCardOut}
                        disabled={props.disableSortOutButton}
                    >
                        {translate(Texts.queryCards.sortOut)}
                    </button>
                </div>
            </div>}
        <div className="categoryLink">
            <a
                onClick={() => props.routeToSelectedCategory(props.rootCategoryId, props.categoryId, props.reverse)}
            >{translate(Texts.queryCards.category)}</a>
        </div>
    </div>
}


/******* S.D.G. *******/



