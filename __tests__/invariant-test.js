import invariant, { InvariantError } from "../invariant"

describe("invariant", () => {
  test("it does not throw when condition is truthy", () => {
    expect(() => invariant("truthy value")).not.toThrow()
  })

  test("it does not throw if options.env is different from NODE_ENV", () => {
    expect(() =>
      invariant(false, "falsy", { env: "development" }),
    ).not.toThrow()
  })

  test("it throws an InvariantFailed error when condition is falsy", () => {
    expect(() => invariant(false, "falsy value")).toThrowError(
      new InvariantError("falsy value"),
    )
  })

  test("it should throw when message is not provided", () => {
    expect(() => invariant(false)).toThrowError(new InvariantError())
  })
})
