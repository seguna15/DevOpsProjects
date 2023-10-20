# Dockerize and running static HTML file using Nginx and docker-compose

1.Create your src folder

```sh
mkdir src
```

2.Create your static HTML

```sh
vim index.html
```

3.Move back to the parent directory 

```sh
cd ..
```

4.Create your docker-compose.yaml file

```sh
vim docker-compose.yaml
```

5.paste the following snippet

```yaml
version: "3"
services:
  client:
    image: nginx:alpine
    ports:
      - 8000:80
    volumes:
      - ./src:/usr/share/nginx/html
```

6.run this command in your terminal to build the docker-container

```sh
docker compose up
```

7.get the list of running containers

```sh
docker ps
```
8.paste this url in your browser

[http://localhost:8000](http://0.0.0.0:8000)
