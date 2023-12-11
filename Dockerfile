FROM node:alpine as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/nginx.conf /etc/nginx/conf.d/default.conf # Not /etc/nginx/nginx.conf
COPY --from=node /app/dist/myapp /usr/share/nginx/html