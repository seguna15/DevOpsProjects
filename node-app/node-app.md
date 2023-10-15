# How to create and dockerize a node js application

1. Create your node-app directory and the src directory inside your node-app

```sh
mkdir -p node-app/src
```

2.Initialize your node app

```sh
npm init -y
```

3.Install some dependencies to run your node app

```sh
npm i express
npm i -D nodemon
```

4.Make the changes below to your package.json file

```json
"type":"module"
```

your package.json file should look like the snippet below.

```json
{
  "name": "app",
  "version": "1.0.0",
  "description": "",
  "type": "module",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon src/server.js",
    "start": "node src/server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

5.Create your node app entry point

```sh
vim src/server.js
```

6.Paste the code snippet below into the server.js file

```js
import express from "express";

const app = express();

const port = 8000;

app.get('/', (req, res) => {
    return res.status(200).send('Hello World');
})

app.listen(port, () => console.log(`server running on http://localhost:${port}`));
```

7.Start your node app with this command

```sh
npm run start
```

9.Since our app is running, it is time to dockerize it.

```sh
vim Dockerfile
```

paste the snippet below

```Dockerfile
# pull in base image
FROM node:lts-alpine3.18

# create the app directory
WORKDIR /app

# the * allows you copy package.json and package-lock.json into the app directory
COPY package*.json ./

# install app dependencies
RUN npm install

# copy files from source into he app directory
COPY ./src ./src

#expose port
EXPOSE 8000

# commands to run 
CMD [ "node", "src/server.js" ]
```

10.Create .dockerignore to ensure that node_modules folder is not shipped when building the image

```sh
vim .dockerignore
```

paste the snippet below

```.dockerignore
node_modules
npm-debug.log
```

11.Build your node-app image

```sh
docker build -t node-app .
```

12.Run your container image

```sh
docker run -it -p 8000:8000 -d node-app
```

13.RUN the following command

```sh
curl http://localhost:8000
```
