import add from "../main";
describe("Add two numbers", function () {
  it("should pass basic tests", function () {
    expect(add("1", "1")).toEqual("2");
    expect(add("123", "456")).toEqual("579");
    expect(add("888", "222")).toEqual("1110");
    expect(add("1372", "69")).toEqual("1441");
    expect(add("12", "456")).toEqual("468");
    expect(add("101", "100")).toEqual("201");
    expect(add("9999999999999999", "9999999999999999")).toEqual("19999999999999998");
    expect(add("63829983432984289347293874", "90938498237058927340892374089")).toEqual(
      "91002328220491911630239667963"
    );
  });
});
