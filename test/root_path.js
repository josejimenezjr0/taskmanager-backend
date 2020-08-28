const axios = require("axios")
const { assert } = require("chai")

describe("Root path", () => {
  it("can reach the root path", async () => {
    const response = await axios.get('http://localhost:3000')
    assert.equal(response.status, 200)
  })
})