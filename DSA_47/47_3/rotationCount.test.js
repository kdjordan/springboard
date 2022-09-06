const findRotationCount = require("./rotationCount")

describe("#rotated index", function(){
  it("returns the frequency", function(){
    expect(findRotationCount([15, 18, 2, 3, 6, 12])).toBe(2) // 2
    expect(findRotationCount([7, 9, 11, 12, 5])).toBe(4) // 4
    expect(findRotationCount([7, 9, 11, 12, 15])).toBe(0) // 0
  })
})
