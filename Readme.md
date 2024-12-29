# API Documentation

## Full Documentation
The complete API documentation, including the deployed link and tests, is available at the following link:  
[Postman Documentation](https://documenter.getpostman.com/view/29256937/2sAYJ6DKxd)

https://documenter.getpostman.com/view/29256937/2sAYJ6DKxd

---

## AWS Deployed Server
The APIs are hosted on an AWS server  at:  
[http://52.64.162.202:3000/api/v1/influencer](http://52.64.162.202:3000/api/v1/influencer)

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
