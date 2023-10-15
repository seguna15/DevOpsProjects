# How to create and dockerize a flask app

1.Ensure you have docker desktop installed on your local machine. If not read installation guide [How to install docker desktop on windows](https://docs.docker.com/desktop/install/windows-install/)

2.Make the flask-app directory and switch to it

 ```sh
mkdir flask-app && flask-app
```

3.Install Python virtual environment and activate it

```sh
python3 -m venv venv 
source venv/bin/activate 
```

4.Install Flask in the virtual environment

```sh
pip install Flask 
```

5.Create requirement.txt to install dependencies during deployment

```sh
pip freeze > requirement.txt
```

6.Create app.py file with the following command or create it in your IDE

```sh
vim app.py
```

add the code snippet below

```python
# Import flask module
from flask import Flask
 
app = Flask(__name__)
 
@app.route('/')
def index():
    return 'Hello to Flask!'
 
# main driver function
if __name__ == "__main__":
    app.run()
```

7.Run the following command to start your flask app

```sh
flask run --host 0.0.0.0 --port 8080
```

8.Since you can successfully run your Flask App its time to dockerize your  app by creating a dockerfile in your IDE or use vim command

```sh
vim Dockerfile
```

9.Paste this snippet into your Dockerfile

```Dockerfile
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

```

10.Build your docker image, -t flag to tag it flask-app the tag and . is the build context provided you are in  the same directory with the Dockerfile

```sh
docker build -t flask-app .
```

11.Run the container with the following command

```sh
docker run -it -p 8080:8080 -d flask-app
```
