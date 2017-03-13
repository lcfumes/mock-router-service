FROM node:7.7-alpine

RUN npm install -g node-dev

ADD package.json /tmp/package.json
RUN cd /tmp && npm install

WORKDIR /app
ADD . /app

RUN mv /tmp/node_modules /app/

EXPOSE 3000

CMD ["node-dev", "server.js"]