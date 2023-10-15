# pull base image
FROM python:3-alpine

# create the app directory
WORKDIR /app

# copy requirements.txt into the app directory
COPY requirements.txt ./

# install app dependencies
RUN pip install -r requirements.txt

# copy files from source into he app directory
COPY . .

#expose port
EXPOSE 8080

# commands to run 
CMD ["flask", "run", "--host", "0.0.0.0", "--port", "8080"]