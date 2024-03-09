import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: './'
});

// Add any custom config to be passed to Jest
const config: Config = {
	verbose: true,
	coverageProvider: 'v8',
	testEnvironment: 'jsdom',
	transformIgnorePatterns: ['<rootDir>/node_modules/.+.(js|jsx)$'],
	setupFiles: ['./setup.jest.ts'],
	moduleNameMapper: {
		'^jose': require.resolve('jose'),
		'^@/components(.*)$': '<rootDir>/src/components$1',
		'^@/pages(.*)$': '<rootDir>/src/pages$1',
		'^@/hooks(.*)$': '<rootDir>/src/hooks$1',
		'^@/utils(.*)$': '<rootDir>/src/utils$1',
		'^@/context(.*)$': '<rootDir>/src/context$1',
		'^@/lib(.*)$': '<rootDir>/src/lib$1',
		'^@/slices(.*)$': '<rootDir>/src/slices$1',
		'^@/provider(.*)$': '<rootDir>/src/provider$1',
		'^@/nhost(.*)$': '<rootDir>/node_modules/@nhost$1', // Add this otherwise tests will fail. This didn't need to be added before(?)
		'^@/(.*)$': '<rootDir>/src/$1'
	},
	transform: {
		'^.+\\.(t)s$': 'ts-jest',
		'^.+\\.(js|jsx)$': 'babel-jest'
	}
	// Add more setup options before each test is run
	// setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
