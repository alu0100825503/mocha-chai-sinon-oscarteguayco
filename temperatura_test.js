var expect = chai.expect;

describe("Temperatura", function() {
  describe("constructor", function() {
    it("should have a value", function() {
      var temp = new Temperatura("32", "f");
      expect(temp.getValor()).to.equal("32");
    });
  });
});