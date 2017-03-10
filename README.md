## Mock Router Service ##

Instal
```
npm install --save-dev lcfumes/mock-router-service
```

Using Mock Service with Docker.

docker-compose.yml:

```
mock-router-service:
    build: "./node_modules/docker/mock-router-service/"
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
