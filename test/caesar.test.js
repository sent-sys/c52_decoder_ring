// Write your tests here!
const {caesar} = require("../src/caesar")
const expect = require("chai").expect

describe("caesarModule()", () => {
    it("should return false if shift is 0, less than -25, or greater than 25", () => {
        const actual = caesar("abcd", 30, true)
        const expected = false
        expect(actual).to.equal(expected)
    })
    it("should return correctly encrypted letters when encoded = true", () => {
        const actual = caesar('abcd', 1, true)
        const expected = 'bcde'
        expect(actual).to.equal(expected)
    })
    it("should return correctly decrypted letters when encoded = false", () => {
        const actual = caesar('bcde', 1, false)
        const expected = 'abcd'
        expect(actual).to.equal(expected)
    })
    it("should return correct encryption even when shift exceeds alphabet limit (z + 1 = a)", () => {
        const actual = caesar('zzzz', 1, true)
        const expected = 'aaaa'
        expect(actual).to.equal(expected)
    })
})