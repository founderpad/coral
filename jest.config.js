const nextJest = require('next/jest');
const createJestConfig = nextJest({
	dir: './'
});
const customJestConfig = {
	moduleDirectories: ['node_modules', '<rootDir>/'],
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	// preset: 'ts-jest',
	// testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
	// transform: {
	// 	'^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
	// },
	// transform: {
	// 	'^.+\\.ts?$': 'ts-jest'
	// },
	moduleNameMapper: {
		'^@/components(.*)$': '<rootDir>/src/components$1',
		'^@/pages(.*)$': '<rootDir>/src/pages$1',
		'^@/hooks(.*)$': '<rootDir>/src/hooks$1',
		'^@/utils(.*)$': '<rootDir>/src/utils$1',
		'^@/context(.*)$': '<rootDir>/src/context$1',
		'^@/lib(.*)$': '<rootDir>/src/lib$1',
		'^@/slices(.*)$': '<rootDir>/src/slices$1',
		'^@/provider(.*)$': '<rootDir>/src/provider$1'
		// '^@/nhost(.*)$': '<rootDir>/node_modules/@nhost$1' // Add this otherwise tests will fail. This didn't need to be added before(?)
	}
};
module.exports = createJestConfig(customJestConfig);

// module.exports = {
// 	setupFilesAfterEnv: ['./jest.setup.js'],
// 	testEnvironment: 'jest-environment-jsdom',
// 	moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
// 	testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
// 	transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
// 	moduleNameMapper: {
// 		'^@/components(.*)$': '<rootDir>/src/components$1',
// 		'^@/pages(.*)$': '<rootDir>/src/pages$1',
// 		'^@/hooks(.*)$': '<rootDir>/src/hooks$1',
// 		'^@/utils(.*)$': '<rootDir>/src/utils$1',
// 		'^@/context(.*)$': '<rootDir>/src/context$1',
// 		'^@/lib(.*)$': '<rootDir>/src/lib$1',
// 		'^@slices(.*)$': '<rootDir>/src/slices$1',
// 		'^@/provider(.*)$': '<rootDir>/src/provider$1'
// 	},
// 	transform: {
// 		'^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
// 	}
// };

// // Load environment variables so that we can access them in our tests
// const { loadEnvConfig } = require('@next/env');
// loadEnvConfig(process.env.PWD);

// import type { Config } from '@jest/types';

// const jestConfig = async (): Promise<Config.InitialOptions> => {
// 	return {
// 		verbose: true,
// 		// preset: 'ts-jest',
// 		testEnvironment: 'jest-environment-jsdom',
// 		// moduleDirectories: ['node_modules', '<rootDir>/'],
// 		moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
// 		setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
// 		moduleNameMapper: {
// 			'^@/components(.*)$': '<rootDir>/src/components$1',
// 			'^@/pages(.*)$': '<rootDir>/src/pages$1',
// 			'^@/hooks(.*)$': '<rootDir>/src/hooks$1',
// 			'^@/utils(.*)$': '<rootDir>/src/utils$1',
// 			'^@/context(.*)$': '<rootDir>/src/context$1',
// 			'^@/lib(.*)$': '<rootDir>/src/lib$1',
// 			'^@slices(.*)$': '<rootDir>/src/slices$1',
// 			'^@/provider(.*)$': '<rootDir>/src/provider$1'
// 		}
// 	};
// };

// export default jestConfig;

// export default async (): Promise<Config.InitialOptions> => {
// 	return {
// 		verbose: true,
// 		preset: 'ts-jest',
// 		moduleDirectories: ['node_modules', '<rootDir>/'],
// 		moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
// 		testEnvironment: 'jest-environment-jsdom',
// 		setupFilesAfterEnv: ['./jest.setup.js'],
// 		moduleNameMapper: {
// 			'^@/components(.*)$': '<rootDir>/src/components$1',
// 			'^@/pages(.*)$': '<rootDir>/src/pages$1',
// 			'^@/hooks(.*)$': '<rootDir>/src/hooks$1',
// 			'^@/utils(.*)$': '<rootDir>/src/utils$1',
// 			'^@/context(.*)$': '<rootDir>/src/context$1',
// 			'^@/lib(.*)$': '<rootDir>/src/lib$1',
// 			'^@slices(.*)$': '<rootDir>/src/slices$1',
// 			'^@/provider(.*)$': '<rootDir>/src/provider$1'
// 		}
// 	};
// };

// module.exports = {
// 	setupFilesAfterEnv: ['./jest.setup.js'],
// 	testEnvironment: 'jest-environment-jsdom',
// 	moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
// 	testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
// 	transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
// 	moduleNameMapper: {
// 		'^@/components(.*)$': '<rootDir>/src/components$1',
// 		'^@/pages(.*)$': '<rootDir>/src/pages$1',
// 		'^@/hooks(.*)$': '<rootDir>/src/hooks$1',
// 		'^@/utils(.*)$': '<rootDir>/src/utils$1',
// 		'^@/context(.*)$': '<rootDir>/src/context$1',
// 		'^@/lib(.*)$': '<rootDir>/src/lib$1',
// 		'^@slices(.*)$': '<rootDir>/src/slices$1',
// 		'^@/provider(.*)$': '<rootDir>/src/provider$1'
// 	},
// 	transform: {
// 		'^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
// 	}
// };

// const nextJest = require('next/jest');
// const createJestConfig = nextJest({});
// const customJestConfig = {
// 	verbose: true,
// 	moduleDirectories: ['node_modules', '<rootDir>/'],
// 	testEnvironment: 'jest-environment-jsdom',
// 	setupFilesAfterEnv: ['./jest.setup.js'],
// 	moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
// 	testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
// 	transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
// 	moduleNameMapper: {
// 		'^@/components(.*)$': '<rootDir>/src/components$1',
// 		'^@/pages(.*)$': '<rootDir>/src/pages$1',
// 		'^@/hooks(.*)$': '<rootDir>/src/hooks$1',
// 		'^@/utils(.*)$': '<rootDir>/src/utils$1',
// 		'^@/context(.*)$': '<rootDir>/src/context$1',
// 		'^@/lib(.*)$': '<rootDir>/src/lib$1',
// 		'^@slices(.*)$': '<rootDir>/src/slices$1',
// 		'^@/provider(.*)$': '<rootDir>/src/provider$1'
// 	}
// };
// module.exports = createJestConfig(customJestConfig);

// Load environment variables so that we can access them in our tests
// const { loadEnvConfig } = require('@next/env');
// loadEnvConfig(process.env.PWD);
