/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/




import React from "react";

import { BoxListItem } from "../../../../../src/components/rootContainer/mainView/dashboardView/BoxListItem";
import { TileHeaderContainer } from "./boxList/TileHeaderContainer";
import { StatisticsContainer } from "./boxList/StatisticsContainer";
import { CardsNextDaysContainer } from "./boxList/CardsNextDaysContainer";
import { boxClick } from "../../../../box/ActionFunctions";


export const BoxListItemContainer = ( props ) => {
	
	return <BoxListItem {...props} onClick={boxClick} >
		<TileHeaderContainer {...props.tileHeader }  boxId={props.boxId} categoryId={props.categoryId} categoryName={props.categoryName} reverse={props.reverse} archived={props.archived} deletable={props.deletable} statistics={props.statistics}   />
		<StatisticsContainer {...props.statistics }  quality0Count={props.quality0Count} quality1Count={props.quality1Count} quality2Count={props.quality2Count} quality3Count={props.quality3Count} quality4Count={props.quality4Count} quality5Count={props.quality5Count} cardsCount={props.cardsCount} archived={props.archived}   />
		<CardsNextDaysContainer {...props.cardsNextDays }  countsPerDayNextWeek={props.countsPerDayNextWeek} archived={props.archived} todaysWeekDay={props.todaysWeekDay}   />
	</BoxListItem> 
}



/******* S.D.G. *******/



