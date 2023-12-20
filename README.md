# Confessions for Cats

## Dev Academy group project

## Setup

Run the following commands in your terminal:

```sh
npm install
npm run knex migrate:latest
npm run knex seed:run
```

To run in development:

```sh
npm run dev
```

## Preface

This was the first student-led full-stack group project we did at Dev Academy. We had rounded off our technical skills by learning useQueryClient that week and were tasked to design and build a full-stack application in one day.

## Product background

We all know cats can throw some sass around. What if cats could share their thought process behind those moments of rebellion? Our team of software developers decided to build such a product for cats to post confessions of their misdeeds. We decided to build a product for a very specific 'customer' to narrow our product scope. Namely, to make something that both showcased our newly-learnt skills in useQueryClient to mutate a database dynamically, and to create a fun front-end experience that a cat would enjoy (i.e. a chasable squeaky mouse and draggable content). We achieved our MVP within the given timeframe, and although we didn't have time to achieve our stretch goals, we felt happy with how we worked together.

## MVP

- Apply newly-learnt useQueryClient to post cat confessions.
- Use front-end technologies (Draggable package and other React functionality) to create an interactive UI.

## Stretch

- Build other CRUD functionality to delete and update the confessions.
- Build a comments section underneath each confession.

## The Tech

This repo includes:

- a single, simple API endpoint (`/api/v1/confessions`)
- a single React component (`<App />`)
- an example database module (`server/db/confessions.js`)
- an API client module (`client/apis/confessions.js`)
- configuration for Vitest and testing library
- configuration for server-side debugging in VS Code
- configuration for preprocessing Sass

## Roles

I was the 'vibes watcher' for this project. I took the role seriously and made a point of facilitating conversation on the vibes during standups. The key takeaway from the experience was there's huge benefit in giving people the space to express how they feel about the project and address any issues as they arise. It allowed for greater transparency and trust within the team and helped us work well together.

## Server API endpoints

| METHOD | ENDPOINT                                 | USAGE                                      | RETURNS                     |
| ------ | ---------------------------------------- | ------------------------------------------ | --------------------------- |
| GET    | `/v1/confessions`                        | Get a list of blog posts                   | An array of blog posts      |
| POST   | `/v1/confessions`                        | Add a new blog post                        | The newly created blog post |
| PATCH  | `/v1/confessions/:confessionId`          | Update and existing blog post              | The updated blog post       |
| DELETE | `/v1/confessions/:confessionId`          | Delete an existing blog post               | Nothing (status OK)         |
| GET    | `/v1/confessions/:confessionId/comments` | Get a list of comments for a specific post | An array of comments        |
| POST   | `/v1/confessions/:confessionId/comments` | Add a new comment to a specific post       | The newly created comment   |
| PATCH  | `/v1/confessions/:confessionId`          | Update an existing comment                 | The updated comment         |
| DELETE | `/v1/confessions/:confessionId`          | Delete an existing comment                 | Nothing (status OK)         |

Request type and route:
GET /v1/posts

Response:

```json
[
  {
    "id": 123,
    "title": "Blog day 1",
    "confessionContent": "I scratched the couch, and friggen' loved it. Sorry not sorry.",
    "datePosted": 1495083077243
  }
]
```

Add Post
Request type and route:
POST /v1/confessions

Request body:

```json
{
  "title": "This is my post",
  "confessionContent": "I pushed a mug off the table. And maintained eye-contact with my owner."
}
```

Response:

```json
{
  "id": 144,
  "title": "This is my post",
  "datePosted": 1495083077243,
  "confessionContent": "I pushed a mug off the table. And maintained eye-contact with my owner."
}
```

Update Post
Request type and route:
PATCH /v1/confessions/:confessionId

Request body:

```json
{
  "title": "This is my updated post",
  "confessionContent": "I coughed up a hairball in front of my crush."
}
```

Response:

```json
{
  "id": 124,
  "title": "This is my updated post",
  "datePosted": 1495083077243,
  "confessionContent": "I coughed up a hairball in front of my crush."
}
```

Comment Endpoints
Get Comments
Request type and route:
GET /v1/posts/:postId/comments

Response:

```json
[
  {
    "id": 1,
    "postId": 123,
    "datePosted": 1495083077243,
    "comment": "Great blog"
  },
  {
    "id": 2,
    "postId": 123,
    "datePosted": 1495083077243,
    "comment": "Really Great blog"
  }
]
```

Add Comment
Request type and route:
POST /v1/posts/:postId/comments

Request body:

```json
{
  "comment": "I enjoyed this post."
}
```

Response:

```json
{
  "id": 4,
  "postId": 123,
  "datePosted": 1495083077243,
  "comment": "I enjoyed this post."
}
```

Update Comment
Request type and route:
PATCH /v1/comments/:commentId

Request body:

```json
{
  "comment": "I really enjoyed this post."
}
```

Response:

```json
{
  "id": 2,
  "postId": 123,
  "datePosted": 1495083077243,
  "comment": "I really enjoyed this post."
}
```
