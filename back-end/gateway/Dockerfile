FROM node:12.16.1

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev vim

ENV NODE_ROOT /usr/app/

RUN mkdir -p $NODE_ROOT

WORKDIR $NODE_ROOT

COPY . .

RUN npm install

RUN npm audit fix
