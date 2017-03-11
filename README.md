## Mock Router Service ##

Instal
```
npm install --save-dev mock-router-service
```

Install package dependencies
```
cd node_modules/mock-router-service
npm install
```

Using Mock Service with Docker.

docker-compose.yml:

In your container

```
tty: true
links:
    - mock-router-service:mock.service.dev
```

```
mock-router-service:
    build: "./node_modules/mock-router-service/docker/"
    ports:
        - 3030:3030
    volumes:
        - ./node_modules/mock-router-service:/app
    environment:
        - VIRTUAL_HOST=mock.service.dev
    tty: true
```

With this service you can test you Routers Services using proxy

The service return all headers, query string and payload
