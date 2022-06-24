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

		return <div className="statistics">
			<div
				className={`${rounded(width5, 0, width4 + width3 + width2 + width1 + width0)} quality5`}
				style={{width: `${width5}%`}}
			/>
			<div
				className={`${rounded(width4, width5, width3 + width2 + width1 + width0)} quality4`}
				style={{width: `${width4}%`}}
			/>
			<div
				className={`${rounded(width3, width5 + width4, width2 + width1 + width0)} quality3`}
				style={{width: `${width3}%`}}
			/>
			<div
				className={`${rounded(width2, width5 + width4 + width3, width1 + width0)} quality2`}
				style={{width: `${width2}%`}}
			/>
			<div
				className={`${rounded(width1, width5 + width4 + width3 + width2, width0)} quality1`}
				style={{width: `${width1}%`}}
			/>
			<div
				className={`${rounded(width0, width5 + width4 + width3 + width2 + width1, 0)} quality0`}
				style={{width: `${width0}%`}}
			/>
		</div>
	}
	return null;
}

const rounded = (width, elementWidthBefore, elementWidthAfter) => {
	if (width === 100) {
		return "rounded"
	}
	if (elementWidthBefore === 0) {
		return "rounded-left"
	}
	if (elementWidthAfter === 0) {
		return "rounded-right"
	}
}




/******* S.D.G. *******/


