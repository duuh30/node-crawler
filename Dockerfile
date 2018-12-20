FROM node:alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . /usr/app
CMD [ "node", "server.js" ]
EXPOSE 3000