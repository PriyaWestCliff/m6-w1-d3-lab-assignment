## Prerequisites

- Node.js
- MongoDB Community Edition
- MongoDB Compass (optional)


## Installation

Install project dependencies:
npm install
 

## Database Setup

Run the seed.js script to create and populate the MongoDB database:

bash
node seed.js
 
The script will automatically create:

- Database: `booklistdb`
- Collection: `books`

and insert the following records:

- Lord of The Rings — J.R.R. Tolkien
- The Alchemist — Paul Coelho
- Da Vinci Code — Dan Brown
- A Tale of Two Cities — Charles Dickens

 
or manually - Import books.json into MongoDB Compass.

Database: booklistdb
Collection: books

## Run the Application

Start the React application and Express server:

 bash
npm run dev
 

## Application URL

Open the browser and navigate to: http://localhost:3000
 
