export const throwError = <T extends Error>(err: T | unknown) => {
  return new Error(`DataStore:`, err as Error)
}
