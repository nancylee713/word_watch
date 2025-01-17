import { expect } from "chai"
import sinon from "sinon"

describe("Word watch functions", () => {
  describe("When the user comes to the page", () => {
    it("I see the top word and its count on the right side of the page", () => {
      // stub out http request
      const top_word = sinon.stub().returns('chicken, 129');
      console.log(top_word)
      expect(top_word).to.eql('chicken, 129');
    })
  })
})
