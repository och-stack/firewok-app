# FireWok

**Let Your Taste Buds Spark**

FireWok is a recipe management application built with React and connected to a hosted Express API.

## Features

- View recipes
- Create new dishes
- View recipe categories
- Add new authors
- View author list
- Recipe pagination
- API error handling
- PostgreSQL database

## Tech Stack

- React
- Vite
- JavaScript
- Bootstrap
- Express
- PostgreSQL
- Supabase
- Railway

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/recipes` | Get all recipes |
| GET | `/recipes/:id` | Get one recipe |
| POST | `/recipes` | Create a recipe |
| GET | `/users` | Get all authors |
| POST | `/users` | Create an author |
| GET | `/categories` | Get all categories |

## API Base URL

https://firewok-api-production.up.railway.app


## Error Handling

The API handles common errors including:

* Missing required fields
* Invalid recipe IDs
* Recipe not found
* Invalid author or category
* Duplicate author email
* Database errors

## Project Structure

src/
├── components/
│   ├── recipes.jsx
│   ├── createdish.jsx
│   ├── addauthor.jsx
│   └── authorlist.jsx
├── App.jsx
└── App.css


## Run Locally


npm install
npm run dev

## Deployment

* Backend API: Railway
* Database: Supabase PostgreSQL
* Frontend: React/Vite application

## Testing

API endpoints were tested using Postman, including successful requests and common error cases.
