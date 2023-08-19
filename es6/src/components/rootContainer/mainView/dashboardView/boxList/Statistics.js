/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/


import React from "react";

export const Statistics = (props) => {
    if (props.archived === true) {
        return null;
    }
    const all =
        props.quality0Count +
        props.quality1Count +
        props.quality2Count +
        props.quality3Count +
        props.quality4Count +
        props.quality5Count;
    if (all > 0) {
        let qualityMap = [];
        qualityMap[0] = {
            key: 0,
            value: props.quality0Count
        };
        qualityMap[1] = {
            key: 1,
            value: props.quality1Count
        };
        qualityMap[2] = {
            key: 2,
            value: props.quality2Count
        };
        qualityMap[3] = {
            key: 3,
            value: props.quality3Count
        };
        qualityMap[4] = {
            key: 4,
            value: props.quality4Count
        };
        qualityMap[5] = {
            key: 5,
            value: props.quality5Count
        };
        qualityMap.sort((a, b) => {
            return a.value - b.value;
        });
        let sum = 0;
        let i = 0;
        qualityMap.forEach(e => {
            e.percentage = Math.round(e.value * 100 / all);
            if (sum + e.percentage > 100 || sum + e.percentage < 100 && i === 6) {
                e.percentage = 100 - sum;
            }
            sum += e.percentage;
            i++;
        });
        const width0 = qualityMap.find(e => e.key === 0).percentage;
        const width1 = qualityMap.find(e => e.key === 1).percentage;
        const width2 = qualityMap.find(e => e.key === 2).percentage;
        const width3 = qualityMap.find(e => e.key === 3).percentage;
        const width4 = qualityMap.find(e => e.key === 4).percentage;
        const width5 = qualityMap.find(e => e.key === 5).percentage;

        let barWidth = 0;
        if (props.cardsCount > 0) {
            barWidth = all * 100 / props.cardsCount;
        }

        return <div className="statistics">
            <div className="progressBar" style={{width: `${barWidth}%`}}>
                <div className="progress"
                     style={{gridTemplateColumns: `${width5}% ${width4}% ${width3}% ${width2}% ${width1}% ${width0}%`}}>
                    <div className="quality5"/>
                    <div className="quality4"/>
                    <div className="quality3"/>
                    <div className="quality2"/>
                    <div className="quality1"/>
                    <div className="quality0"/>
                </div>
            </div>
        </div>
    }
    return null;
}


/******* S.D.G. *******/



