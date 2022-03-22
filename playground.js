const moment = require("moment")
    // const timezone = require("moment-timezone")
const when_you_free = require("./index.js")
const { see } = require("code_clarity")
    // function testWhenYouFree() {
    //     let dateHTML = {
    //         one: "2020-03-01",
    //         two: "2021-03-01",
    //         two: "2022-03-01"
    //     }
    //     let dateObject = {
    //         one: new Date(2010, 1, 1),
    //         two: new Date(2011, 1, 1),
    //         three: new Date(2020, 1, 1)
    //     }
    //     let testObject = when_you_free.isBefore(new Date(), "2024-10-01")
    //     console.log(testObject)

// }
// // let fullDate = when_you_free.createFullDate(2020, 3, 26, 4, 23, 1)
// // console.log("full date", when_you_free.format(fullDate, "llll"))
// let newDate = when_you_free.createDay(2020, 3, 26)

// console.log("createDay", when_you_free.format(newDate, "ll"))
//     // let newMonth = when_you_free.createMonth(2020, 3)
//     // console.log("createMonth", when_you_free.format(newMonth, "ll"))
//     // testWhenYouFree()

// function createNormalDay(year, month, day) {
//     month = month.toString()
//     if (month.length === 1) {
//         month = "0" + month
//     }
//     day = day + 1;
//     if (day.toString().length === 1) {
//         day = "0" + day;
//     }
//     let stringed = year + "-" + month + "-" + day;
//     let date = moment(stringed).toDate()
//     return date;
//     // return format;
// }
// let feb = when_you_free.format("2022-03-01", "ll")
// console.log(feb)

// let normal = when_you_free.createDay(2022, 3, 1)
// console.log(normal)

// function createFullDate(year, month, day, hour, minute, second) {
//     month = month.toString()
//     if (month.length === 1) {
//         month = "0" + month
//     }
//     // day = day + 1;
//     if (day.toString().length === 1) {
//         day = "0" + day;
//     }
//     let stringed = year + "-" + month + "-" + day;
//     let date = moment(stringed).add(hour, "h").add(minute, "m").add(second, "s").format()
//         // let timezoned = timezone(date, "Asia/Hong Kong").format()
//         // let splitted = timezoned.split("+")
//         // let format2 = splitted[0] + "Z"
//     return new Date(date)
// }

function createFullDate2(year, month, day, hour, minute, second) {
    let getDay = when_you_free.createDay(year, month, day)
    let date = moment(getDay).add(hour, "h").add(minute, "m").add(second, "s").toDate()
    return date;
}
// let test5 = createFullDate2(2022, 3, 1, 3, 3, 3)
// see.should("not have time zoned")
// see.is(test5)
// let test3 = when_you_free.createFullDate(2022, 3, 1, 3, 3, 3)
// let test4 = when_you_free.createDay(2022, 2, 3)
// see.should("be accurate")
// see.is(test4)
// see.should("not have time zoned")
// see.is(test3)
// let test = when_you_free.createFullDate(2022, 3, 1, 3, 3, 3)
// see.should("createFullDate should return march 1, 3, 3, 3")
// see.is(test)
// let format2 = moment(test).format("ll")
// see.should("format accurately")
// see.is(format2)

// let formatted = when_you_free.formatDateToPost("mar 1 2020")
// see.should("handle mar 1 2020")
// see.is(formatted)
// let testtest = when_you_free.createDay(2022, 3, 1)
// see.should("handle date object")
// console.log(moment(testtest).format("llll"))

// let testtest2 = when_you_free.createFullDate(2022, 3, 1, 1, 1, 1)
// console.log(moment(testtest2).format("llll"))

// let getType = when_you_free.getType(new Date())
// console.log(moment(getType).format("llll"))

// let test = when_you_free.format(new Date(), "llll")
// console.log(test)

let second = when_you_free.formatDateToPost("01-03-2022")
console.log("🚀 ~ file: playground.js ~ line 104 ~ second", second)
let third = when_you_free.formatDateToPost("2022-03-02")

console.log("🚀 ~ file: playground.js ~ line 74 ~ third", third)

let sinceLast = when_you_free.dateIsWithinLimit("2022-03-14", 14)

console.log("🚀 ~ file: playground.js ~ line 109 ~ sinceLast", sinceLast)