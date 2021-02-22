let { transformAsync } = require("@babel/core")

describe("invariant", () => {
  /**
   * @param {string} code
   */
  const transpile = (code) =>
    transformAsync(code, {
      configFile: false,
      filename: __filename,
      plugins: ["macros"],
    })

  beforeEach(() => {
    process.env.NODE_ENV = "development"
  })

  test("condition only", async () => {
    let res = await transpile(`
      import invariant from '../macro.js'
      invariant(true)
    `)
    expect(res.code).toMatchSnapshot()
  })

  test("condition and message", async () => {
    let res = await transpile(`
      import invariant from '../macro.js'

      let bool = true
      invariant(bool, "message")
    `)
    expect(res.code).toMatchSnapshot()
  })

  test("production env", async () => {
    process.env.NODE_ENV = "production"

    let res = await transpile(`
      import invariant from '../macro.js'

      let bool = true
      invariant(bool, "message")
    `)
    expect(res.code).toMatchSnapshot()
  })
})
