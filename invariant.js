/**
 *
 * @param condition
 * @param {string=} msg
 * @param {import("@vasiliicuhar/invariant.macro").Options=} options
 */
export default function invariant(condition, msg = "", options) {
  let env = options?.env ?? process.env.NODE_ENV
  if (condition || env !== process.env.NODE_ENV) return

  throw new InvariantError(msg)
}

export class InvariantError extends Error {
  /**
   * @param {string=} msg
   */
  constructor(msg) {
    super(msg ? `Invariant failed: ${msg}` : "Invariant failed")
  }
}
