Coral is [founderpad's](https://www.founderpad.com/) client facing application, which is used by founders alike to create and seek feedback from the community on their ideas. It is the founder platform.

It's built using React ([Next.js](https://nextjs.org/)) on the client side, which interfaces with a GraphQL API ([Hasura](https://hasura.io/)) and Postgres database on the backend. Currently we are using [Nhost](https://nhost.io/) (an open source alternative to Firebase) as a wrapper to bundle these necessary tools together into a serverless architecture. As the project and team expands, we will migrate everything to AWS and utilise containerization to handle all of the dev ops needs ourselves for maximum flexibility.

The advantage of using Nhost for the MVP is it's built using open source tools, so we will be able to deploy separately in the future if/when necessary. Under the hood, Nhost (v1) deploys the application to Digital Ocean, and v2 will be migrating this across to AWS. There is no vendor lock-in which is particularly enticing as deploying these services ourselves will be straightforward in the future.

It should more or less involve creating a docker-compose file with these services and depeloying to Fargate (just an example).

It is deployed to [Vercel](https://vercel.com/) via our CI/CD pipeline which uses [GitHub Actions](https://github.com/features/actions).

## Getting Started

### Pre-requisites

-   [VSCode](https://code.visualstudio.com/)
    -   ESLint
    -   Prettier - Code formatter (make sure this is set to be your default formatter)
    -   Bracket Pair Colorizer - A customizable extension for colorizing matching brackets
    -   Auto Import - Automatically finds, parses and provides code actions and code completion for all available imports. Works with Typescript and TSX
    -   Git History
    -   GitLens
    -   JavaScript (ES6) code snippets
-   [Yarn](https://yarnpkg.com/)
-   [Node](https://nodejs.org/en/)
-   [iTerm2](https://iterm2.com/)
-   [Docker](https://www.docker.com/)
-   [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
-   [Ngrok](https://ngrok.com/)(Mine is installed via Homebrew)

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


## React (NextJS) application

## API (Node)
Typically we would provide a standalone API deployed to AWS (Fargate, EC2 etc), but Nhost provides us with the ablity to create a custom API to facilitate any custom business logic that we may need. An example of this is sending emails to users to inform them when their idea or comment has been reported and we take it from there. This works by way of webhooks.

This API is accessed inside the project at its root `/api` (not to be confused with NextJS' API routes at `/src/pages/api`).

This API isn't too dissimilar from Next's API routes, but it is specific to Nhost and is deployed via Google Cloud Run (but v2 of Nhost will be migrating this to AWS Lambda). In the future, if/when we decide to deploy our own standalone API (preferable given that we may need custom resolver logic for GraphQL etc).

It is a rather vanilla Node API, and we use it mainly in an event-driven way that responds to Hasura events. E.g., when a record is inserted into the report table we act on this by firing the `/api/email/send-reported-email.js`.

Future changes will include an endpoint to faciliate Stripe customer sign ups so that the application will able to accept Stripe payments.

## Testing build locally
We use [Ngrok](https://ngrok.com/) to test our build locally befoore any commits. This ensures we test over HTTPS and mimic a production-like environment but on our local instance.

Ensure the application is running (`yarn dev`) and in a separate iTerm2 tab (or VSCode terminal) run `yarn ngrok`. This will provide a forwarding address (e.g., https://8400-86-3-111-125.ngrok.io) which you can paste into your browser address bar.
