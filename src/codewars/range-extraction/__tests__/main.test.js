import solution from "../main";

describe("Tests", () => {
  it("test", () => {
    expect(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])).toEqual(
      "-6,-3-1,3-5,7-11,14,15,17-20"
    );
    expect(solution([1])).toEqual(
      "1"
    );
    expect(solution([1,2])).toEqual(
      "1,2"
    );
    expect(solution([1,2,3])).toEqual(
      "1-3"
    );
    expect(solution([-1,1,2,3,5])).toEqual(
      "-1,1-3,5"
    );
    expect(solution([])).toEqual(
      ""
    );
    expect(solution()).toEqual(
      ""
    );
  });
});
