**Apis Documentation**
 The full documentation of the apis along with the deployed link and tests  can be found on this link:
    https://documenter.getpostman.com/view/29256937/2sAYJ6DKxd


**AWS Deployed Server**
    The apis are hosted by me on AWS at:
    http://52.64.162.202:3000/api/v1/influencer

**Local Deployment**
    To run the nodejs application locally on your machine 
    -clone this repository
    -navigate to the directory of this repository 
    -In the terminal run "npm i" to install all the dependencies
    -Before you test he apis make sure you have mongodb compass installed or install it from https://www.mongodb.com/products/tools/compass
    -Run "node server.js" to start the server
    -Test the apis

**Architecture**
 The architecute of the backend can be divided into 
    -server.js
    >config
      -db.js
    >controllers
      -influencerController.js
    >models
      -influencerModel.js
    >routes
      -influencerRoutes.js

