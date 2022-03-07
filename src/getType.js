const { see, hourglass } = require("code_clarity")
const moment = require("moment")
moment.locale("en")
const define_me = require("define_me")

const { createHour, createMinute, createMonth, createFullDate, createDay } = require("./create")

function arrStringtoNum(arr) {
    return arr.map(Number);
}

function handleDigital(hhmm) {
    let split = hhmm.split(":")
    let numbers = arrStringtoNum(split)
    if (split.length === 2) {
        return createMinute(numbers[0], numbers[1])
    } else if (split.length === 3) {
        return createHour(numbers[0], numbers[1], numbers[2])
    }
}

function handleDashed(ddmmyyyy) {
    let split = ddmmyyyy.split("/")
    let numbers = arrStringtoNum(split)
    if (split[0].length === 4) {
        return createDay(numbers[0], numbers[1], numbers[2])
    } else {
        return createDay(numbers[2], numbers[1], numbers[0])
    }
}

function handleHyphen(ddmmyyyy) {
    let split = ddmmyyyy.split("-")
    let numbers = arrStringtoNum(split)
    if (split[0].length === 4) {

        return createDay(numbers[0], numbers[1], numbers[2])
    } else {
        return createDay(numbers[2], numbers[1], numbers[0])
    }
}


function handleNumber(yyyymmdd) {
    let year = yyyymmdd.slice(0, 4)
    let month = yyyymmdd.slice(4, 6)
    let day = yyyymmdd.slice(6, 8)

    return createDay(parseInt(year), parseInt(month), parseInt(day))
}

/**
 * @example
 * isDate(date)
 * @author zen-out
 * @date 2022-03-07
 * @param {any} date
 * @returns {any}
 */
function isDate(date) {
    if (define_me.containsThis(date, define_me.hhmm)) {
        return true;
    } else if (define_me.containsThis(date, define_me.hhmmss)) {
        return true;
    } else if (define_me.containsThis(date, define_me.dashDDMMYYYY)) {
        return true;
    } else if (define_me.containsThis(date, define_me.dashYYYYMMDD)) {
        return true;
    } else if (define_me.containsThis(date, define_me.hyphenDDMMYYYY)) {
        return true;
    } else if (define_me.containsThis(date, define_me.hyphenYYYYMMDD)) {
        return true;
    } else if (define_me.containsThis(date, define_me.yyyymmdd)) {
        return true;
    } else if (define_me.containsThis(date, define_me.knexDate)) {
        return true;
    } else if (define_me.containsThis(date, define_me.stringDate)) {
        return true;
    } else if (date instanceof Date) {
        return true;
    } else if (moment(date).isValid()) {
        return true;
    } else {
        return false;
    }
}

/**
 * @example
 * getType()
 * @author zen-out
 * @date 2022-03-07
 * @param {any} date
 * @returns {object} moment
 */
function getType(date) {
    if (define_me.containsThis(date, define_me.hhmm)) {
        return handleDigital(date)
    } else if (define_me.containsThis(date, define_me.hhmmss)) {
        return handleDigital(date)
    } else if (define_me.containsThis(date, define_me.dashDDMMYYYY)) {
        return handleDashed(date)
    } else if (define_me.containsThis(date, define_me.dashYYYYMMDD)) {
        return handleDashed(date)
    } else if (define_me.containsThis(date, define_me.hyphenDDMMYYYY)) {
        return handleHyphen(date)
            // return moment(date)
    } else if (define_me.containsThis(date, define_me.hyphenYYYYMMDD)) {
        return handleHyphen(date)
    } else if (define_me.containsThis(date, define_me.yyyymmdd)) {
        return handleNumber(date)
    } else if (define_me.containsThis(date, define_me.knexDate)) {
        return moment(date)
    } else if (define_me.containsThis(date, define_me.stringDate)) {
        return moment(date)
    } else if (date instanceof Date) {
        return moment(date)
    } else if (moment(date).isValid()) {
        return moment(date)
    } else {
        return false;
    }
}


/**
 * @example
 * catchError(getDate)
 * @author zen-out
 * @date 2022-03-06
 * @param {any} getDate
 * @returns {any}
 */
function catchError(getDate) {
    if (getDate === undefined || typeof getDate !== "object") {
        return upset("not a valid date" + getDate, "when_you_free module")
    } else {
        return true;
    }
}

module.exports = { catchError, getType, isDate }