const {polybius} = require("../src/polybius")
const expect = require("chai").expect

describe("polybius()", () => {
    it("should return correctly encrypted string when encoding = true", () => {
        const actual = polybius('aaaa', true)
        const expected = '11111111'
        expect(actual).to.equal(expected)
    })
    it("should return strings with spaces correctly", () => {
        const actual = polybius('a a a', true)
        const expected = '11 11 11'
        expect(actual).to.equal(expected)
    })
    it("should return correctly decrypted string when encoding = false", () => {
        const actual = polybius('11111111', false)
        const expected = 'aaaa'
        expect(actual).to.equal(expected)
    })
    it("should return correctly decrypted string with spaces when encoding = false", () => {
        const actual = polybius('11 11 11 11', false)
        const expected = 'a a a a'
        expect(actual).to.equal(expected)
    })
    it("should return correctly decrypted string where value of: 42 = (i/j)", () => {
        const actual = polybius('11 42 42 11', false)
        const expected = 'a (i/j) (i/j) a'
        expect(actual).to.equal(expected)
    })
})