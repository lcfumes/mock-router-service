## Mock Router Service ##

Install
```
npm install --save-dev mock-router-service
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
    build: "./node_modules/mock-router-service/"
    ports:
        - 3030:3030
    environment:
        - VIRTUAL_HOST=mock.service.dev
    tty: true
```

With this service you can test you Routers Services using proxy

The service return all headers, query string and payload
