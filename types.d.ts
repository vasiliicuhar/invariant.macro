declare module "@vasiliicuhar/invariant.macro" {
  type Options = {
    env?: string
  }

  export default function invariant(condition: any, msg?: string, options?: Options): void
}