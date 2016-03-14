var expect = chai.expect;

describe("Conversor", function() {
  describe("constructor", function() {
    it("should have a value", function() {
      var medida = new Medida("32F");
      expect(medida.getValue()).to.equal("32");
    });
  });
});