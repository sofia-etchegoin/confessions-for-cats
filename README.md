# Boilerplate: Confessions for Cats

## Setup

### What's included

This repo includes:

* a single, simple API endpoint (`/api/v1/confessions`)
* a single React component (`<App />`)
* an example database module (`server/db/confessions.js`)
* an API client module (`client/apis/confessions.js`)
* configuration for Vitest and testing library
* configuration for server-side debugging in VS Code
* configuration for preprocessing Sass

### Installation

#### **From the Github UI**

See the instructions [here](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) to use Github's feature to create a new repo from a template.

#### **From the command line**

```
git clone https://github.com/dev-academy-challenges/boilerplate-fullstack-query [your-project-name]
cd [your-project-name]
npm install # to install dependencies
npm run dev # to start the dev server
```

You can find the server running on [http://localhost:3000](http://localhost:3000) and the client running on [http://localhost:5173](http://localhost:5173).

Server API Endpoints
METHOD	ENDPOINT	USAGE	RETURNS
GET	/v1/confessions	Get a list of blog posts	An array of blog posts

POST	/v1/confessions	Add a new blog post	The newly created blog post

PATCH	/v1/confessions/:confessionId	Update an existing blog post	The updated blog post

DELETE	/v1/confessions/:confessionId	Delete an existing blog post	Nothing (status OK)

GET	/v1/confessions/:confessionId/comments	Get a list of comments for a specific post	An array of comments

POST	/v1/confessions/:confessionId/comments	Add a new comment to a specific post	The newly created comment

PATCH	/v1/conefessions/:confessionId	Update an existing comment	The updated comment

DELETE	/v1/confessions/:confessionId	Delete an existing comment	Nothing (status OK)

Post Endpoints
Get Posts
Request type and route:
GET /v1/posts

Response:


[
  {
    "id": 123,
    "title": "Blog day 1",
    "confessionContent": "I scratched the couch, and friggen' loved it. Sorry not sorry.",
    "datePosted": 1495083077243
  }
]

Add Post
Request type and route:
POST /v1/confessions

Request body:

{
  "title": "This is my post",
  "confessionContent": "I pushed a mug off the table. And maintained eye-contact with my owner."
}

Response:

{
  "id": 144,
  "title": "This is my post",
  "datePosted": 1495083077243,
  "confessionContent": "I pushed a mug off the table. And maintained eye-contact with my owner."
}

Update Post
Request type and route:
PATCH /v1/confessions/:confessionId

Request body:

{
  "title": "This is my updated post",
  "confessionContent": "I coughed up a hairball in front of my crush."
}
Response:

{
  "id": 124,
  "title":"This is my updated post",
  "datePosted": 1495083077243,
  "confessionContent": "I coughed up a hairball in front of my crush."
}

Delete Post
Request type and route:
DELETE /v1/confessions/:confessionId

Response: Nothing (status 200 - OK)

TBC

Comment Endpoints
Get Comments
Request type and route:
GET /v1/posts/:postId/comments

Response:

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

Add Comment
Request type and route:
POST /v1/posts/:postId/comments

Request body:

{
  "comment": "I enjoyed this post."
}
Response:

{
  "id": 4,
  "postId": 123,
  "datePosted": 1495083077243,
  "comment": "I enjoyed this post."
}
Update Comment
Request type and route:
PATCH /v1/comments/:commentId

Request body:

{
  "comment": "I really enjoyed this post."
}
Response:

{
  "id": 2,
  "postId": 123,
  "datePosted": 1495083077243,
  "comment": "I really enjoyed this post."
}
Delete Comment
Request type and route:
DELETE /v1/comments/:commentId

Response: Nothing (status OK)
