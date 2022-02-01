module.exports = {
	setupFilesAfterEnv: ['./jest.setup.js'],
	testEnvironment: 'jsdom',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
	testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
	transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
	moduleNameMapper: {
		'^@components(.*)$': '<rootDir>/src/components$1',
		'^@pages(.*)$': '<rootDir>/src/pages$1',
		'^@hooks(.*)$': '<rootDir>/src/hooks$1',
		'^@utils(.*)$': '<rootDir>/src/utils$1',
		'^@context(.*)$': '<rootDir>/src/context$1',
		'^@lib(.*)$': '<rootDir>/src/lib$1',
		'^@slices(.*)$': '<rootDir>/src/slices$1',
		'^@provider(.*)$': '<rootDir>/src/provider$1'
	},
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
	}
};

// Load environment variables so that we can access them in our tests
const { loadEnvConfig } = require('@next/env');
loadEnvConfig(process.env.PWD);

// module.exports = {
// 	roots: ['<rootDir>'],
// 	testEnvironment: 'jsdom',
// 	moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
// 	testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
// 	transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
// 	transform: {
// 		'^.+\\.(ts|tsx)$': 'babel-jest'
// 	},
// 	watchPlugins: [
// 		'jest-watch-typeahead/filename',
// 		'jest-watch-typeahead/testname'
// 	],
// 	moduleNameMapper: {
// 		'\\.(css|less|sass|scss)$': 'identity-obj-proxy',
// 		'\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js'
// 	},
// 	modulePaths: ['src', 'test'],
// 	setupFilesAfterEnv: ['<rootDir>/src/__test__/setupTests.ts']
// };

// const nextJest = require('next/jest');
// // import nextJest from 'next/jest';

// const createJestConfig = nextJest({
// 	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
// 	dir: './'
// });

// // Add any custom config to be passed to Jest
// const customJestConfig = {
// 	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
// 	moduleNameMapper: {
// 		// Handle module aliases (this will be automatically configured for you soon)
// 		// '^@/components/(.*)$': '<rootDir>/components/$1',

// 		// '^@/src/pages/(.*)$': '<rootDir>/src/pages/$1'
// 		'^@src/(.*)': '<rootDir>/src/$1',
// 		'^@components/(.*)': '<rootDir>/src/components/$1',
// 		'^@pages/(.*)$': '<rootDir>/src/pages/$1'
// 	},
// 	testEnvironment: 'jest-environment-jsdom'
// };

// // createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
// module.exports = createJestConfig(customJestConfig);

// const nextJest = require('next/jest');
// const createJestConfig = nextJest({
// 	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
// 	dir: './'
// });

// const customJestConfig = {
// 	setupFilesAfterEnv: ['./jest.setup.js'],
// 	// testEnvironment: 'jsdom',
// 	testEnvironment: 'jest-environment-jsdom',
// 	moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
// 	testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
// 	transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
// 	moduleNameMapper: {
// 		'^@components(.*)$': '<rootDir>/src/components$1',
// 		'^@pages(.*)$': '<rootDir>/src/pages$1',
// 		'^@hooks(.*)$': '<rootDir>/src/hooks$1',
// 		'^@utils(.*)$': '<rootDir>/src/utils$1',
// 		'^@context(.*)$': '<rootDir>/src/context$1',
// 		'^@lib(.*)$': '<rootDir>/src/lib$1',
// 		'^@slices(.*)$': '<rootDir>/src/slices$1',
// 		'^@provider(.*)$': '<rootDir>/src/provider$1',
// 		'^@types(.*)$': '<rootDir>/src/types$1',
// 		'^@generated(.*)$': '<rootDir>/src/generated$1'
// 	}
// };

// module.exports = createJestConfig(customJestConfig);
