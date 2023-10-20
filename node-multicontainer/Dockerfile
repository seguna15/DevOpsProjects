FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci

COPY ./src ./src

# to run container with nodemon CMD ["npm", "run" , "dev"]

CMD ["npm", "start" ]
