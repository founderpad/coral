import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: './'
});

// Add any custom config to be passed to Jest
const config: Config = {
	coverageProvider: 'v8',
	testEnvironment: 'jsdom',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
	transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
	moduleNameMapper: {
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
	}
	// Add more setup options before each test is run
	// setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
