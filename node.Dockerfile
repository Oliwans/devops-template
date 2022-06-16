FROM node:14-alpine

WORKDIR /code

COPY . /code

RUN yarn

EXPOSE 3000

CMD npm start