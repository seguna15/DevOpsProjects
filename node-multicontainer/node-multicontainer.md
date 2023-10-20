# Run Node multi-container app with docker compose

1.clone this repository

```sh
git clone  https://github.com/trulymittal/Nodejs-REST-API.git
```

2.create your Dockerfile

```sh
vim Dockerfile
```

3.paste the snippet below into the dockerfile

```Dockerfile
FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci

COPY . .

CMD ["npm", "start"]
```

4.create docker ignore to prevent the files and folders listed in the .dockerignore from being copied into the docker image.

```sh
vim .dockerignore
```

paste the following snippet

```.dockerignore
./node_modules
```

5.create a docker-compose.yaml

```sh
vim docker-compose.yaml
```

paste the following code snippet into your file
```yaml
version: '3.9'

services:
  # MongoDb services
  mongo_db:
    container_name: db_container
    image: mongo:latest
    restart: always
    volumes:
      - mongo_db:/data/db
  #Node API service
  api:
    build: .
    ports:
      - 3000:3000
    environment:
      PORT: 3000
      MONGODB_URI: mongodb://mongo_db:27017/my_db
    depends_on:
      - mongo_db
   
volumes:
  mongo_db: {}
```

6.Run this command

```sh
docker compose up -d
```


7.Use any API tester such as postman, insomnia or Thunder Client

```
POST http://localhost:3000/products
Content-Type: application/json

{
  "productName": "macbook air",
  "price": 15.00
}

GET http://localhost:3000/products
```

8.Run this command to stop and remove all containers associated with the service

```sh
docker compose down
```

9.Run this command to rebuild the container if you have made changes

```sh
docker compose build
```
