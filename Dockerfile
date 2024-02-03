
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm i --legacy-peer-deps

COPY . .

RUN npm run build

FROM nginx:alpine

COPY .ci/nginx.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html
COPY --from=0 /app/dist/charte /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

