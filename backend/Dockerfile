FROM node:14.15.4-alpine as base

WORKDIR /app
COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:14.15.4-alpine

WORKDIR /app

COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/dist ./dist
COPY ./.env ./.env

# run node ./dist/index.js
CMD ["node", "/app/dist/index.js"]
