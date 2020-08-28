const axios = require("axios")
// const { expect } = require("chai")

describe("Root path", () => {
  it("can reach the root path", async () => {
    const response = await axios.get('http://localhost:3000')
    expect(response.status).toBe(200)
  })
})