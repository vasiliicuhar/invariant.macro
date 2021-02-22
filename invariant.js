/**
 *
 * @param condition
 * @param {string} message
 */
export default function invariant(condition, message = "") {
  if (condition) return
  throw new Error(
    process.env.NODE_ENV === "production"
      ? "Invariant failed"
      : `Invariant failed: ${message}`,
  )
}
