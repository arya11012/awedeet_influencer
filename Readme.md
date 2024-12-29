
## Full Documentation
The complete API documentation, including the deployed link and tests, is available on the following link:  
[Postman Documentation](https://documenter.getpostman.com/view/29256937/2sAYJ6DKxd)

https://documenter.getpostman.com/view/29256937/2sAYJ6DKxd

---

## AWS Deployed Server
The APIs are hosted on  AWS instance  at:  
[http://52.64.162.202:3000/api/v1/influencer](http://52.64.162.202:3000/api/v1/influencer)

## API Endpoints

| Endpoint                      | HTTP Method | Description                        | Query Params | Request Body                                                                                                  |
|-------------------------------|-------------|------------------------------------|--------------|-------------------------------------------------------------------------------------------------------------|
| `/getAllInfluencerProfiles`   | GET         | Retrieve all profiles.            | None         | None                                                                                                        |
| `/getInfluencerProfileById`   | GET         | Retrieve profile by ID.           | `id`         | None                                                                                                        |
| `/updateInfluencerProfile`    | PUT         | Update an influencer profile.     | `id`         | `{ "likes": 1200, "comments": 150, "shares": 70, "followers": 1420, "audienceAgeRange": "25-34", "audienceGender": "Female" }` |
| `/createInfluencerProfile`    | POST        | Add a new influencer profile.     | None         | `{ "name": "John Doe", "handle": "@johndoe", "likes": 1000, "comments": 100, "shares": 50, "followers": 1150, "audienceAgeRange": "18-24", "audienceGender": "Male" }` |
| `/deleteInfluencerProfile`    | DELETE      | Delete an influencer profile.     | `id`         | None                                                                                                        |

---

## Local Deployment
To run the Node.js application locally on your machine, follow these steps:

1. **Clone the Repository**  
   Clone this repository to your local machine.

2. **Navigate to the Directory**  
   Navigate to the directory where the repository is cloned.

3. **Install Dependencies**  
   In the terminal, run the following command to install all dependencies:  
   ```bash
   npm i
4. **Ensure MongoDB Compass is Installed**  
   - Verify that MongoDB Compass is installed on your machine.  
   - If not, download and install it from [MongoDB Compass](https://www.mongodb.com/products/tools/compass).

5. **Start the Server**  
   Run the following command in the terminal to start the server:  
   ```bash
   node server.js
6. **Test the apis**
   You can refer this documentation on how to test the apis
   [https://documenter.getpostman.com/view/29256937/2sAYJ6DKxd]

# Backend Architecture

The architecture of the backend can be divided into the following structure:

```
- server.js
> config
  - db.js
> controllers
  - influencerController.js
> models
  - influencerModel.js
> routes
  - influencerRoutes.js
## Folder Structure

### 1. `server.js`  
The main entry point of the application. It initializes the server, connects to the database, and sets up middleware and API routes.

### 2. `config`  
This folder contains configuration files.  
- **`db.js`**: Handles database connections and environment-specific settings.

### 3. `controllers`  
This folder houses the logic for handling incoming requests and generating appropriate responses.  
- **`influencerController.js`**: Processes API requests related to influencer profiles.

### 4. `models`  
Defines the data structure and schema for the database.  
- **`influencerModel.js`**: Specifies the schema for storing influencer profile data in MongoDB.

### 5. `routes`  
Maps API endpoints to their corresponding controller functions.  
- **`influencerRoutes.js`**: Defines and organizes routes for influencer-related operations.
