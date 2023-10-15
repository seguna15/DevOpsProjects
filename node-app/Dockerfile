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