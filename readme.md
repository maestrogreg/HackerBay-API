# STATELESS MICROSERVICE USING NODEJS
### An API that makes use of JWT to authenticate clients before they can access private routes. 

# Setting up
The dependencies and packages for this project were installed making use of npm.

# Install Dependencies
```
npm  install
```

# Start-up the server run
``` 
npm start 
```

# Run Test Suite
```
npm test
```
# API End-Points
## **Login**
A user is required to make a POST request to (http://localhost:3005/login) in order to receive a token that enables authorization to use private routes. 
Expected inputs:
```
{
    "userName" : "string",
    "password" : "string"
}
```
## **JSON Patch**
A JSON patch is performed when a user sends a PUT request to (http://localhost:3005/patch) with the token available in the request header. The expected payload from the user is:
```
{
    "document": "object",
    "thePatch": "array of objects"
}
```
##  **Thumbnail Generator**
Public images can be downloaded and resized to thumbnails of dimension 50 x 50, as long as their URL is provided as part of the request body when making a post request to (http://localhost:3005/resize) with valid authorization.
```
{
    "url": "string"
} 
```

# Docker-hub
The dockerhub link for the project is (https://hub.docker.com/r/maestrogreg/hackerbaytask1)

# Tools used
* **JWT**
* **JOI**
* **Node-Image-Downloader**
* **Node-Image-Resizer**
* **Super Test**
* **Mocha**
* **ES-Lint**
* **Docker**
