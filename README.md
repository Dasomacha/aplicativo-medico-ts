# Basic API REST Citas

Node.js, Express.js, MySQL, Sequelize and Typescript Basic REST API.

You can clone this repo as starter project for your Express, MySQL API server

## Features and Functionalities 😃

- Node, Express, Typescript, MySQL and Sequelize as ORM Basic REST API
- CRUD Operations (A Controller for this)
- SQL for database: Relational MySQL - Use ORM Sequelize

## Tech Stack 💻

- [Node](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com)
- [Typescript](https://nodejs.dev/en/learn/nodejs-with-typescript/)
- [Sequelize](https://sequelize.org)

## Installation and Running App :zap:

**1. Clone this repo by running the following command :-**

```bash
 git clone https://github.com/norbeydanilo/api-citas-sequelize-ts.git
 cd api-citas-sequelize-ts
```

**2. Install the required package :-**

```bash
 npm install
```

**3. Now run the npm command to start the project :-**

```bash
 npm run dev
```

**4.** **🎉 Open postman and test the rest api on this url `https://127.0.0.1:3000`**

Remember that the `.env` file must be created for the API to work.

Remember to create the database. It is not necessary to run script to create tables or other specifications, as this is done by the ORM.

Additionally this project uses: 

- [TS-Nodemon](https://stackoverflow.com/questions/37979489/how-to-watch-and-reload-ts-node-when-typescript-files-change)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Cors](https://www.npmjs.com/package/cors)

### Swagger and Running

Debes tener creada unicamente la base de datos. El ORM se encarga del mapeo entre la especificación en código y la base de datos MySQL.
