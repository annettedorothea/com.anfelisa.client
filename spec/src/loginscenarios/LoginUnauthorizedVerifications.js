/********************************************************************************
 * generated by de.acegen
 ********************************************************************************/


const {assertMessage} = require("../registrationscenarios/Utils");
module.exports = {
    errorMessageShown: async function (actual) {
        return assertMessage(actual[0], {type: "error", id: 0, visible: true})
    }
}


/******* S.D.G. *******/

