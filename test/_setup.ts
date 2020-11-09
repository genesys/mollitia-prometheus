import './jest.d';

expect.extend({
  async toBeAround (received, expected, round) {
    return new Promise((resolve) => {
      const min = received - round;
      const max = received + round;
      resolve({
        pass: (expected > min && expected < max),
        message: () => `Expected ${received} to be around ${expected}`
      });
    });
  }
});
