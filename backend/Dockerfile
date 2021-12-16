FROM node:14.15.4-alpine as base

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm ci

COPY src ./src
COPY tsconfig.json ./tsconfig.json

RUN npm run build

FROM node:14.15.4-alpine

WORKDIR /usr/src/app

COPY --from=base ./node_modules ./node_modules
COPY --from=base /dist /dist

run node dist/index.js