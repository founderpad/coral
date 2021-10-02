Coral is [founderpad's](https://www.founderpad.com/) client facing application, which is used by founders alike to create and seek feedback from the community on their ideas.

## Getting Started

### Pre-requisites
- [VSCode](https://code.visualstudio.com/)
  - ESLint
  - Prettier - Code formatter
- [Yarn](https://yarnpkg.com/)
- [Node](https://nodejs.org/en/)
- [iTerm2](https://iterm2.com/)
- [Docker](https://www.docker.com/)

First, before you can clone the project, you must set up your SSH key in your GitHub settings. This is more secure than using HTTPS, and it alleviates the need to enter your credentials frequently.

Inside your working directory (e.g., $HOME/dev) run the following:
```
ssh-keygen -t rsa -C "{your-name}@founderpad.com"
```

Save it to the prompted `id_rsa` file and then past the contents of it into your [GitHub settings](https://github.com/settings/keys) as a new SSH key. Once this is done you're good to go!


## Running the application

Now everything should be set up, you can start running the app.

1. Run `yarn` to retrieve all of the necessary Node libraries we need to run the application
2. Once all of the libraries have been fetched, you can run `yarn dev` to run the application locally. This will open a browser tab at [http://localhost:3000](http://localhost:3000)

### Running tests
We use Jest and React Testing Library to build our test suite. In the future, we may use [MSW](https://mswjs.io/) as well to mock API responses to expand our test coverage.

1. Run `yarn test` to execute the test suite
