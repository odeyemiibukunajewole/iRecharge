<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## iRecharge Backend Developer’s Take-Home Test

# Question 1

```
What kind of problems or disadvantages may occur in the handling/maintenance of
this list (imagine, that a real-world list like this would contain thousands of entries)?

1.The first problem is that data is  duplicated for instance  the provider name and currency are repeated for each row, which is inefficient.

2 Another problem with this table is that it is very difficult to query with all the data in one table.

3.It would be hard to efficiently do agregate query query  like total price per article or provider because the data is only in one single table.

4.Another problem is that this table will be harder to maintain such as making  changes like adding/removing providers or articles would be difficult
in this format and with well over thousand of entries the table will become very slow.


```

# Question 2

```
A better approach is to model the table into entities and relationship as shown below

```

<img src="https://asset.cloudinary.com/drpdniy0j/9f4012f41b1d640b125887962dc941df" alt="" />

# Question 3

```
Explain why your data model is better than the original list.

1. No duplication  of records because each entity stores data only once.

2. The design provide us with flexibility to query efficiently by article, provider, currency etc

3. With the design , the table becomes modular which mean adding/changing articles, providers, etc. is easy by updating that one table alone.

4. Additional info can be added to entities without affecting other tables and records

```

# Question 4

```
Once your data model has been established, create an SQL query that generates
the original list again.


SELECT
  a.name AS article,
  p.name AS provider,
  c.symbol AS currency,
  pr.price
FROM Price pr
INNER JOIN Article a ON a.article_id = pr.article_id
INNER JOIN Provider p ON p.provider_id = pr.provider_id
INNER JOIN Currency c ON c.currency_id = pr.currency_id
ORDER BY a.article_id, p.provider_id

```

## API Development

To get stated and get the app running please follow the instruction below

- I utilizing the nestjs,PosgreSQL and TypeORM for my tech stack.
- The test is diploy to github as my prefered repository.

## Install packages,Test Infrastructure and deploy Infrastructure

```bash
# Clone
$ https://github.com/odeyemiibukunajewole/iRecharge.git

# install dependencies
$ deploy": "npm i,

# Postman Collection Link
$ https://app.getpostman.com/join-team?invite_code=0e7ec885962703fa5deb431c644d10e3

```

## Running the app

```bash

# watch mode
$ npm run start:dev

```

### API & Routes

base path : [localhost:3005](http://localhost:3456/api/v1)

### ARTICLE

```
GET         /api/v1/articles
GET         /api/v1/articles/:id
POST        /api/v1/articles
PUT         /api/v1/articles/:id
DELETE      /api/v1/articles/:id

```

### PROVIDER

```
GET         /api/v1/currencys
GET         /api/v1/currencys/:id
POST        /api/v1/currencys
PUT         /api/v1/currencys/:id
DELETE      /api/v1/currencys/:id

```

### CURRENCY

```
GET         /api/v1/providers
GET         /api/v1/providers/:id
POST        /api/v1/providers
PUT         /api/v1/providers/:id
DELETE      /api/v1/providers/:id

```

### PRICE

```
GET         /api/v1/prices
GET         /api/v1/prices/:id
POST        /api/v1/prices
PUT         /api/v1/prices/:id
DELETE      /api/v1/prices/:id

```
