const when_you_free = require("./dist/index.js")

function testWhenYouFree() {
    let dateHTML = {
        one: "2020-03-01",
        two: "2021-03-01",
        two: "2022-03-01"
    }
    let dateObject = {
        one: new Date(2010, 1, 1),
        two: new Date(2011, 1, 1),
        three: new Date(2020, 1, 1)
    }
    let testObject = when_you_free.isBefore(new Date(), "2024-10-01")
    console.log(testObject)

}

testWhenYouFree()