# GradeBook API

A School Management Information System (MIS) backend built with **NestJS**, **TypeORM** and **PostgreSQL**.

It manages schools, levels, classes, students, teachers and courses, and will later support grades per student per course.

> **Status:** work in progress. This project is being built step by step as a way to learn NestJS.

## Tech stack

- [NestJS](https://nestjs.com) (TypeScript)
- [TypeORM](https://typeorm.io)
- PostgreSQL
- class-validator and class-transformer (request validation)

## Features

**Done**
- [x] Project setup and PostgreSQL connection (config via `.env`)
- [x] Global request validation (`ValidationPipe` with `whitelist`)

**In progress**
- [ ] Levels (Senior 4, Senior 5, Senior 6): CRUD

**Planned**
- [ ] Schools
- [ ] Classes (belong to a school and a level)
- [ ] Students (belong to a class)
- [ ] Teachers and Courses (many-to-many)
- [ ] Users, JWT authentication and roles
- [ ] Grades per student per course
- [ ] Swagger documentation, pagination, tests

## Data model

- A **School** has many **Classes**
- A **Level** has many **Classes**
- A **Class** has many **Students**
- **Teachers** and **Courses**: many-to-many
- **Students** and **Courses**: many-to-many

## Prerequisites

- Node.js (LTS)
- npm
- PostgreSQL (with a database created, for example `gradebook-db`)

## Getting started

1. Clone the repository and install dependencies:

```bash
git clone git@github.com:Moise-codes/Gradebook-api.git
cd Gradebook-api
npm install
```

2. Create a `.env` file in the project root:

```
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=gradebook-db
```

3. Start the server in development mode:

```bash
npm run start:dev
```

The API runs at `http://localhost:3000`.

## Scripts

| Command | What it does |
|---|---|
| `npm run start:dev` | Run with auto-reload |
| `npm run build` | Compile to `dist/` |
| `npm run start:prod` | Run the compiled app |
| `npm run test` | Run unit tests |

## API endpoints

### Levels (in progress)

| Method | Route | Description |
|---|---|---|
| POST | `/levels` | Create a level |
| GET | `/levels` | List all levels |
| GET | `/levels/:id` | Get one level |
| PATCH | `/levels/:id` | Update a level |
| DELETE | `/levels/:id` | Delete a level |

More endpoints will be added as each module is built.

## Project structure

```
src/
├── main.ts            # app entry point
├── app.module.ts      # root module
└── levels/
    ├── dto/           # request shapes and validation rules
    ├── entities/      # database tables
    ├── levels.controller.ts
    ├── levels.service.ts
    └── levels.module.ts
```

## Notes

- `synchronize: true` is enabled for development only. It must be turned off in production, and migrations should be used instead.
- Never commit your `.env` file.

## Author

Moise
