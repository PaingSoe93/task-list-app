## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript with GraphQL and Prisma Task List App.

## Installation

```bash
$ yarn install
```

If you are using npm, Please use the following 

```bash
$ npm install --legacy-peer-deps
```

## DB Migration

```bash
$ npx prisma migrate dev --name init
```
## Running the app

```bash
# development
$ yarn dev

# production mode
$ yarn start:prod
```

## Test GraphQL

```bash
http://localhost:3000/graphql
```

## License

Nest is [MIT licensed](LICENSE).
