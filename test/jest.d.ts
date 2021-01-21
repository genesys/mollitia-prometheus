declare namespace jest {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Matchers<R> {
    toBeAround (expected: number, around: number): CustomMatcherResult;
  }
}
