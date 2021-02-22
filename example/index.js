import invariant from "@vasiliicuhar/invariant.macro"

invariant(true, "does not fail")

let condition = process.env.NODE_ENV === "invalid_value"
invariant(condition, "will fail")
