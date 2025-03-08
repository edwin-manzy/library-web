import type { Config } from 'jest';
// import { compilerOptions } from './tsconfig.app';
import { pathsToModuleNameMapper } from 'ts-jest';

const config: Config = {
  verbose: true,
  bail: true,
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  roots: ['<rootDir>'],
  preset: 'ts-jest',
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts',
    '!**/vendor/**', '!src/**/*.stories.{ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/tests/**/*.test.{ts,tsx}'],
  modulePaths: ['./'],
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  moduleNameMapper: pathsToModuleNameMapper({}),
  transform: {
    '^.+\\.(ts|tsx)?$': ['ts-jest', { diagnostics: { ignoreCodes: ['TS151001'], }, tsconfig: './tsconfig.app.json' }],
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/coverage',
    '/tests',
    '/src/main.tsx',
    'package.json',
    'package-lock.json',
    'reportWebVitals.ts',
    'setupTests.ts',
    'index.tsx'
  ],
  setupFilesAfterEnv: ['./jest.setup.ts']
};

// eslint-disable-next-line import/no-default-export
export default config;
