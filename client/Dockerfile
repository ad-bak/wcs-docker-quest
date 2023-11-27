FROM node:lts-alpine

RUN mkdir /app
WORKDIR /app
COPY package*.json ./
COPY public public
RUN npm i
COPY src src

CMD npm start