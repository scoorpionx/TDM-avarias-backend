FROM node:12

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN npm i -g @adonisjs/cli
RUN npm i

COPY . ./

EXPOSE 3333

CMD adonis key:generate

CMD adonis serve
