let { createMacro } = require("babel-plugin-macros")
let pkg = require("./package.json")

module.exports = createMacro(
  function invariant({ references, state, babel: { types: t } }) {
    let tIdentifier = t.identifier("invariant")

    state.file.path.node.body.unshift(
      t.importDeclaration(
        [t.importDefaultSpecifier(tIdentifier)],
        t.stringLiteral(pkg.name + "/invariant.js"),
      ),
    )

    references.default.forEach((refPath) => {
      let isProduction = process.env.NODE_ENV === "production"
      let parent = refPath.parentPath.node

      if (!t.isCallExpression(parent)) {
        throw new Error(`Expected call expression. Found: ${parent.type}`)
      }

      if (parent.arguments.length === 0 || parent.arguments.length > 2) {
        throw new Error(`Unexpected argument count: ${parent.arguments.length}`)
      }

      refPath.parentPath.replaceWith(
        t.callExpression(
          tIdentifier,
          isProduction ? parent.arguments.slice(0, 1) : parent.arguments,
        ),
      )
    })
  },
  {
    configName: "invariant",
  },
)
