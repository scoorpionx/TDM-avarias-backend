FROM node:12

RUN mkdir -p /home/app/node_modules && chown -R node:node /home/app

WORKDIR /home/app

COPY package.json ./

COPY yarn.lock ./

RUN yarn

COPY . .

COPY --chown=node:node . .

USER node

EXPOSE 3333

CMD [ "adonis", "serve" ]