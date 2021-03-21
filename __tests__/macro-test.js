import pluginTester from "babel-plugin-tester"
import plugin from "babel-plugin-macros"

beforeEach(() => {
  process.env.NODE_ENV = "development"
})

pluginTester({
  pluginName: "invariant.macro",
  plugin,
  snapshot: true,
  babelOptions: { filename: __filename },

  tests: {
    "condition only": `
      import invariant from '../macro.cjs'
      invariant(true)
    `,

    "condition and message": `
      import invariant from '../macro.cjs'

      let bool = true
      invariant(bool, "message")
    `,

    "production env": {
      setup() {
        process.env.NODE_ENV = "production"
      },
      code: `
        import invariant from '../macro.cjs'
  
        let bool = true
        invariant(bool, "message")
      `,
    },

    "development-only invariant": {
      setup() {
        process.env.NODE_ENV = "production"
      },
      code: `
        import invariant from '../macro.cjs'
  
        let bool = true
        invariant(bool, "message", { env: 'development' })
      `,
    },
  },
})
