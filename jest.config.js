module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.spec.ts'],
  verbose: true,
  restoreMocks: true,
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
}
