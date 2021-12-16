FROM node:14.15.4-alpine as base

WORKDIR /app
COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:1.21.4

COPY --from=base /app/dist/ /usr/share/nginx/html
# COPY --from=base /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]