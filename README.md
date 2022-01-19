# Coral

Coral is [founderpad's](https://www.founderpad.com/) client facing application, which is used by founders alike to create and seek feedback from the community on their ideas. It is the founder platform.

It's built using React ([Next.js](https://nextjs.org/)) on the client side, which interfaces with a GraphQL API ([Hasura](https://hasura.io/)) and Postgres database on the backend. Currently we are using [Nhost](https://nhost.io/) (an open source alternative to Firebase) as a wrapper to bundle these necessary tools together into a serverless architecture via docker-compose. As the project and team expands, we will need to transfer this to AWS/Cloudflare/Fly.io (delete as appropriate) to have complete control and flexibility.

The advantage of using Nhost for the MVP is it's built using open source tools, so we will be able to deploy separately in the future if/when necessary. Under the hood, Nhost (v2) deploys the application to AWS. There is no vendor lock-in which is particularly enticing as deploying these services ourselves will be straightforward in the future.

The curren infrastructure:

-   Frontend NextJS app - Vercel
-   Hasura GraphQL API - EKS K8s
-   Postgres database - Aurora
-   Serverless functions (push notifications, email etc) - AWS Lambda

It should more or less involve creating a docker-compose file with these services and deploying via EKS/ECS as Fargate containers (just an example). That's a fairly contrived example, as we would probably want to use IaC to help provision this (e.g., Terraform).

It is deployed to [Vercel](https://vercel.com/) via our CI/CD pipeline which uses [GitHub Actions](https://github.com/features/actions).

## Getting Started

### Pre-requisites

-   [VSCode](https://code.visualstudio.com/)
    -   ESLint
    -   Prettier - Code formatter (make sure this is set to be your default formatter)
    -   Bracket Pair Colorizer - A customizable extension for colorizing matching brackets
    -   Auto Import - Automatically finds, parses and provides code actions and code completion for all available imports. Works with Typescript and TSX
    -   GraphQL (Syntax highlighting, validation etc)
    -   Git History
    -   GitLens
    -   JavaScript (ES6) code snippets
-   [Yarn](https://yarnpkg.com/) - Package manager
-   [Node](https://nodejs.org/en/) - Goes without saying
-   [iTerm2](https://iterm2.com/) - The Terminal on steroids
-   [Docker](https://www.docker.com/) - I use Docker Desktop on the M1 Mac
-   [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) - For AWS duties
-   [Ngrok](https://ngrok.com/) - Mine is installed via Homebrew
-   [Nhost CLI](https://docs.nhost.io/platform/nhost/local-development) - For running our local instance (docker-compose)

First, before you can clone the project, you must set up your SSH key in your GitHub settings. This is more secure than using HTTPS, and it alleviates the need to enter your credentials frequently.

Inside your working directory (e.g., $HOME/dev) run the following:

```
ssh-keygen -t rsa -C "{your-name}@founderpad.com"
```

Save it to the prompted `id_rsa` file and then past the contents of it into your [GitHub settings](https://github.com/settings/keys) as a new SSH key. Once this is done you're good to go!

## Running the application

Now everything should be set up, you can start running the app.

1. Create a `.env.local` file from the `.env.template` file and populate the fields like so:

| KEY                         | VALUE                            |
| --------------------------- | -------------------------------- |
| NEXT_PUBLIC_GRAPHQL_BACKEND | http://localhost:1337/v1/graphql |
| NEXT_PUBLIC_BACKEND         | http://localhost:1337            |
| NHOST_ADMIN_SECRET          | nhost-admin-secret               |

2. Run `yarn` to retrieve all of the necessary Node libraries we need to run the application
3. Once all of the libraries have been fetched, you can run `yarn dev` to run the application locally. This will open a browser tab at [http://localhost:3000](http://localhost:3000)

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

## Debugging locally

When our local environment is running, we can debug and test the output of the serverless functions by access the Docker logs with the following command:
`docker logs nhost_api --follow`

This will provide us with a live tail of the logs so we can see what's happening.

## Adding NPM libraries

If you're going to add a new library, make sure you add it in to the correct `package.json` file. If it's client side for the React project then install it in the root `package.json`, but if it's for the custom serverless API, then install it to `/api/package.json`

## Applying migrations and metadata

When we want to add new columns/tables/triggers/views etc (migration) we should do this locally through the Hasura console. **DO NOT** do this via raw SQL or through the CLI, as otherwise Hasura won't generate the correct migrations for us and we can't track it easily.

This applies to metadata (permissions, column mappings, relationships, events, actions etc) as well. The necessary metadata information will be added to the relevant table/view files in `nhost/metadata/default/tables`. As an example, say we want to add a new column called "team" to be inserted into the ideas table, we should go through the Hasura console and add this via permissions > insert for the `ideas` table. This will, in turn, create or update the corresponding metadata file for this table (in this case `public_ideas.yaml`). Under the `insert_permissions` you'll see the column you just configured in Hasura. E.g.,

```
insert_permissions:
- permission:
    backend_only: false
    check:
      user_id:
        _eq: X-Hasura-User-Id
    columns:
    - additional_information
    - business_plan
    - competitors
    - description
    - field
    - is_published
    - name
    - status
    - team // The new field to insert when creating a new idea
    set:
      user_id: x-hasura-User-Id
  role: user
```

Any changes to permissions, relationships, actions, or events will update or create the corresponding metadata YAML file.

When we make changes to our database locally via Hasura (http://localhost:1337), Hasura will create the necessary migration files for us (up.sql with the migration script, and down.sql to rollback if there are issues). These migrations are stored inside `/nhost/migrations/default` and will be prefixed with a timestamp, denoting in which order they were added. This is crucial so that the migrations are applied in the correct order.

### NOTE: Hasura doesn't create down.sql for migrations created using raw SQL, but we will need to use this approach some times. You must manually create the `down.sql` yourself

Some times we may need to create triggers, functions or views. This is fine, and the appropriate migration will be created for us, but the `down.sql` will be empty. It will display a comment indicating that the `down.sql` couldn't be auto-generated (unsurprising given how complex and unpredictable the raw SQL could be). Ensure you create the necessary `down.sql` when this happens. Test to make sure it works.

When you're happy it works, commit it into GitHub where the GitHub Action CI/CD will build the project and, upon completion, will deploy to the development environment for testing.
