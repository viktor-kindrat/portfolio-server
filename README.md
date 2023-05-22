# Portfolio server
The project involves creating a server for a portfolio using an API to retrieve data from a database. The database used is MongoDB and the data is accessed using Mongoose. This project aims to showcase the creator's skills and achievements by providing a platform to display their work.

### Main features:
- CORS: Enables cross-origin resource sharing to allow requests from a different domain than the one the API is hosted on.
- Express: A popular Node.js framework used for building web applications and APIs.
- Telegram Bot API: Allows for the creation of a bot to interact with Telegram users and receive messages or notifications.
- Mongoose: An object modeling tool for MongoDB, providing a higher level of abstraction and making it easier to interact with the database.
- Dotenv: A zero-dependency module that loads environment variables from a .env file, allowing for secure configuration of sensitive data such as API keys or database credentials.

### Queries avialible:

`db/getCertificates` - returns array of certifications from MongoDb

`db/getSkills` - returns array of skills from MongoDb

`db/getProjects` - returns array of projects from MongoDb
