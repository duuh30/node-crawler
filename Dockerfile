FROM node:alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . /usr/app
CMD [ "npm", "start"]
EXPOSE 3000