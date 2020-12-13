FROM node:10-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod
FROM nginx:1.19.1-alpine
COPY --from=build-step /app/dist/MyTaskNowFrontend /usr/share/nginx/html
RUN cd /usr/share/nginx/html