let { createMacro, MacroError } = require("babel-plugin-macros")
let pkg = require("./package.json")

module.exports = createMacro(
  function invariant({ references, state, babel: { types: t } }) {
    let tIdentifier = t.identifier("invariant")

    state.file.path.node.body.unshift(
      t.importDeclaration(
        [t.importDefaultSpecifier(tIdentifier)],
        t.stringLiteral(pkg.name + "/invariant"),
      ),
    )

    references.default.forEach((refPath) => {
      let isProduction = process.env.NODE_ENV === "production"
      let parent = refPath.parentPath.node

      if (!t.isCallExpression(parent)) {
        throw new MacroError(`Expected call expression. Found: ${parent.type}`)
      }

      if (parent.arguments.length === 0) {
        throw new MacroError(
          `Unexpected argument count: ${parent.arguments.length}`,
        )
      }

      if (
        parent.arguments.length > 2 &&
        t.isObjectExpression(parent.arguments[2]) &&
        parent.arguments[2].properties.find((x) =>
          t.isObjectProperty(x, { key: "env" }),
        )?.value.value !== process.env.NODE_ENV
      ) {
        // remove invariant call, if options.env is different from NODE_ENV
        refPath.parentPath.remove()
      } else {
        refPath.parentPath.replaceWith(
          t.callExpression(
            tIdentifier,
            isProduction ? parent.arguments.slice(0, 1) : parent.arguments,
          ),
        )
      }
    })
  },
  {
    configName: "invariant",
  },
)
