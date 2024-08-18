## Backend Installation

#### Please follow the steps below to run the server locally.
- Open Terminal/Cmd and navigate to the /backend directory.
- Run the command - ```npm install```
- Once the dependencies are installed, you must create a ```.env``` file in the current directory.
- Create a MongoDB account, in Mongo Atlas and create a free cluster.
- Refer to this [website](https://tinyurl.com/4u6vtj84)  for detailed instructions on how to set up a cluster.
- Copy the cluster connection (MongoDBUri) string.
- Create an env variable ```MONGODB_URI=<paste_your_mongo_uri_string>```
- And start the server with the command:
  ```npm run start```
- Once the server is up and running you add the details to the database using API endpoints.

---
## API Endpoints
### POST - /cards 
- **Request Body:**
  ```
  {
  "title": "Account Management",
  "description": "Find out how to update your profile, manage your settings, and secure your account with two-factor authentication.",
  "link": "https://www.example.com"
  }
  ```

### GET - /cards
- **Get all cards in the database.**

### GET - /cards/:title
- **Get a specific card detail by ```:title``` query.**

