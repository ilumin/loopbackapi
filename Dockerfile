FROM node

RUN mkdir -p /app/server \
  && cd /app

COPY package.json package.json
COPY starter-server.js server/server.js

RUN npm i

WORKDIR /app

CMD ["npm", "start"]
