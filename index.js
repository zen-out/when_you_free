const { isBefore, difference, isBetween } = require("./src/compare")
const { getDuration } = require("./src/duration")
const { getReadableFormat, digitalToSeconds, formatDateToPost, format } = require("./src/format")
const { catchError, getType, isDate } = require("./src/getType")

module.exports = {
    getType,
    getReadableFormat,
    digitalToSeconds,
    formatDateToPost,
    format,
    getDuration,
    isBefore,
    difference,
    isBetween,
    catchError,
    getType,
    isDate
}