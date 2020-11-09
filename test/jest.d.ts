declare namespace jest {
  interface Matchers<R> {
    toBeAround (expected: number, around: number): CustomMatcherResult;
  }
}
