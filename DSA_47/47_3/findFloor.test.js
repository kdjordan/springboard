const findFloor = require("./findFloor")

describe("#rotated index", function(){
  it("returns the frequency", function(){
    expect(findFloor([1,2,8,10,10,12,19], 9)).toBe(8) // 2
    expect(findFloor([1,2,8,10,10,12,19], 20)).toBe(19) // 4
    expect(findFloor([1,2,8,10,10,12,19], 0)).toBe(-1) // 0
  })
})
