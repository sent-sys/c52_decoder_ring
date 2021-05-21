// Write your tests here!
const {polybius} = require("../src/polybius")
const expect = require("chai").expect

describe("polybius()", () => {
    it("should return correctly encrypted string when encoding = true", () => {
        const actual = polybius('aaaa', true)
        const expected = '11111111'
        expect(actual).to.equal(expected)
    })
    if("should return correctly decrypted string when encoding = false", () => {
        const actual = polybius('1111111')
        const expected = 'aaaa'
        expect(actual).to.equal(expected)
    })
})