# ut-tube

A complete youtube like video streaming backend in NodeJS and ExpressJS

This project is built to enhence my skill in the backend development

## .gitignore

.gitignore file is used to store the list the sensitive things in the project like API keys. This file make sure the keys or anything listed will not be tracked by Git.

## .env

The actual API keys and the sensitive things are stored in the .env file (Environment variables).

Those keys are directly used from the system, so it remain secure

## Nodemon

Nodemon is a dev dependency that is used to restart the server on save.
It is called dev dependency because it is only used in the developmet process, so it is not taken in the production

## utils

This folder stores the functions that are repeated like taking taking tokens

## middlewares

It is a layer of software that sits between the core application logic and the server, acting as a bridge for incoming requests and outgoing responses.

## Controllers

It is the where the main logic of the software sits

## db

It is where the database connection code is being kept for the modularity of the code

## models

It store the structure of the data that is going to be stored in the database

## routes

It stores the code that match a request's URL and method the code should run

## Prettier

Code formatter for VS code. Installed as extension but also as an node package for a big teams to maintain consistant code formatting.

We install prettier as a Dev (development dependency)
We just use that for the development purposes but not in the production

## .prettierrc

This file is used to store the prettier configuration for the project

## .prettierignore

This file is used to define the files where pretteir is not going to implement.

## 2 things to remember when working with a database

1. Database connections can fail due to network issues, wrong credentials, or server downtime. Always handle errors properly using try/catch (async/await) or .catch() (promises).

2. Database is always in another continent. It takes time to connect with database so its always a better approach to use async/await

```js
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(
      `\n MongoDB connected!! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection error", error);
    process.exit(1);
  }
};
```

## cookie-parser

It is used to parse the cookies that are attached to the request made by the client to the server.

## CORS

Cross-Origin Resource Sharing lets your backend say which website is allowed to request its data.

--> Without CORS a browser blockas requests from another site for security.
--> With CORS your server says "this site is allowed", so the browser accepts it.

## Middleware

Middleware is the software that sits betweene a request and a response to process data.

--> Check if the user is logged in .
--> Check if the user is admin

## asyncHandler

asyncHandler software prevents unhandled promise rejections and removes repetitive try/catch blocks

## ApiError

It is a custom error handler for APIs
It lets you throw errors in a consistent format across your backend

## mongoose

Mongoose is an Object Data Modelling library for MongoDB in NodeJS.
It helps you to interact with MongoDB using schemas and models, making data handling easier and more structured.

## Refresh Token

A refresh token is a long-lasting key that lets you ask for a new access token when the old one expires.

## Access Token

short-lived pass to use an API or service

## bcryptjs

It is a password hashing library written purely in JavaScript hence it is slower compared to bcrypt. It gives better cross-platform compatibility.
No compilation needed

## bcrypt

It is also a password hashing library but purely written in C++
It is faster compared to bcryptjs. It requires compilation

## mongoose-aggregate-paginate-v2

It is a MongoDB/moongose plugin that adds pagination funtionality to aggretion queries
It helps you break down large datasets into smaller, manageable pages

Instead of returning all 10,000 video records at once, it lets you get:
Page 1. Videos 1-20,
Page 2: Videos 21-40,
Page 3: Videos 41-60

## jsonwebtoken

It is node.js library for handling JWTs
It creates digitally signed tokens that can't be tampered with

Think of JWT like a secure digital ID card that proves who you are without storing passwords

It is called as bearer token because you bear/carry it to prove your identity.

Main functions:
--> sign/create secure token containing user info
--> verify token if it is valid and hasn't tampered
--> decode tokens - extract informations from the valid tokens

Uses:

1. Authentication - prove you are logged in
2. Authorization - prove you hav permission to access
3. Secure data transfer - send user info safely between services

## pre hook

It is a hook by mongoose that execute code automatically before database operations(like save, updata, delete)

Lets you run custom logic before something happens to your data

The word "save" is the event on which the pre hook should be executed
Arrow function is not used in the hook below because arrow function does't have context so we use normal function because the hook need context.

```js
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});
```

Custom method to compare the passwords

```js
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};
```

## cloudinary

Cloudinary is a cloud-based service that handles all your media files (images, videos, documents) so you don't have to store tehm on your server

## Multer

Multer is a Node.js middleware used with express to handle file uploads.

When a user uploads a file from the browser, it arrives as multipart/form-data.

Express by itself can't parse that. Multer parses it and gives you access to the file.

### fs

It lets you work with file system to read files, write files, create or delte files, update or append to files, check files details.


