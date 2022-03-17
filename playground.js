const moment = require("moment")
const timezone = require("moment-timezone")
const when_you_free = require("./dist/index.js")
moment.locale("en")
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

function createFullDate(year, month, day, hour, minute, second) {
    month = month.toString()
    if (month.length === 1) {
        month = "0" + month
    }
    // day = day + 1;
    if (day.toString().length === 1) {
        day = "0" + day;
    }
    let stringed = year + "-" + month + "-" + day;
    let date = moment(stringed).add(hour, "h").add(minute, "m").add(second, "s")
    let timezoned = timezone(date, "Asia/Hong Kong").format()
    let splitted = timezoned.split("+")
    let format2 = splitted[0] + "Z"
    return new Date(format2)
}

let test = when_you_free.createFullDate(2022, 3, 1, 3, 3, 3)
console.log("🚀 ~ file: playground.js ~ line 67 ~ test", test)
let format2 = moment(test).format("ll")
console.log(format2)
let formatted = when_you_free.formatDateToPost("mar 1 2020")
let formatted2 = when_you_free.formatDateToPost("2022-03-01T03:03:03.000Z")
let second = when_you_free.formatDateToPost("01-03-2020")
console.log(second)
let third = when_you_free.formatDateToPost("2022-03-02")

console.log("🚀 ~ file: playground.js ~ line 74 ~ third", third)