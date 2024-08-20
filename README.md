## Installation

### CLIENT

CD into client and run command npm i to install all the frontend dependencies.

Then run npm run dev to start the client.

### SERVER

**Sept1:** CD into server and run command npm i to install all the backend dependencies.

**Step2:** In the .env file create a variable MONGODB_URI And DB_NAME and enter your MongoDB connection string.

**Step3:** Then run npm start to start the server.

**Optionally:** You can also add the sample data job_title_des.csv in your mongo database to pre-populate database.

## Usage

**There are 3 EndPoints**
- `POST /cards`: This takes title and description from the request body and creates an new card and returns the new card details in the response.

- `GET /cards`: It returns all cards in the help center and additionally you can pass an "searchQuery" at the end of the route like `Get /cards/?searchQuery=someText` to search whatever data you need.

- `GET /cards/:title`: This should return the details of a specific card(it's not really needed since i implemented an search in the `GET /cards` endPoint and searching).

