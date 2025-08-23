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
