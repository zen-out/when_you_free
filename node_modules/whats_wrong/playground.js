const { upset } = require("./index.js")

upset({ object: "can also accept object" }, "location")
const whats_wrong = require("./index.js")
whats_wrong.upset("error message", "location")