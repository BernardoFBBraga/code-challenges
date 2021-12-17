import pigIt from "../pigLatin";

test("main", () => {
  expect(pigIt("Pig latin is cool")).toEqual("igPay atinlay siay oolcay");
  expect(pigIt("Pig, latin is cool")).toEqual("igPay, atinlay siay oolcay");
  expect(pigIt("Pig, latin is cool!")).toEqual("igPay, atinlay siay oolcay!");
  expect(pigIt("This is my string")).toEqual("hisTay siay ymay tringsay");
  expect(pigIt("This T")).toEqual("hisTay Tay");
  expect(pigIt("T")).toEqual("Tay");
  expect(pigIt("O tempora o mores !")).toEqual("Oay emporatay oay oresmay !");
});
