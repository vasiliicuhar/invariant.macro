module.exports =
  process.env.NODE_ENV === "production"
    ? require("./dist/invariant.production.cjs")
    : require("./dist/invariant.development.cjs")
