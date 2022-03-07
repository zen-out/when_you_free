const { getType, catchError } = require("./getType")
const { upset } = require("whats_wrong")
const moment = require("moment")

/**
 * @example
 * let getDuration = when_you_free.getDuration("2022-03-01T19:06:31.047Z", "2022-03-01T20:04:32.047Z", "seconds")
 * @author zen-out
 * @date 2022-03-07
 * @param {any} start
 * @param {any}  end
 * @param {any}  type
 * @returns {any}
 */
function getDuration(start, end, type) {
    let dateOne = getType(start)
    let dateTwo = getType(end)
    let seeIfValid1 = catchError(dateOne)
    let seeIfValid2 = catchError(dateTwo)
    let isError = seeIfValid1 === true && seeIfValid2 === true
    if (isError === true) {
        let duration = moment.duration({
            from: dateOne,
            to: dateTwo
        });
        return duration.as(type)
    } else {
        return upset("something wrong with date - get duration function", "when_you_free/duration.js")
    }
}


/**
 * @author zen-out
 * @date 2022-03-07
 * @param {any} dateOne
 * @param {any}  dateTwo
 * @returns {any}
 */
function addDurations(dateOne, dateTwo) {
    return dateOne.add(dateTwo)

}
module.exports = { getDuration }