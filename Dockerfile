FROM iron/node:4-dev
RUN apk update && apk upgrade
WORKDIR /app
RUN apk add bash
RUN npm install sphere-node-sdk
RUN npm install minimist
COPY . /app
ENTRYPOINT ["node", "index.js"]
RUN rm -rf /var/cache/apk/*
