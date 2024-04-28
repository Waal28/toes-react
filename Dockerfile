FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
ENV MODE=dev
CMD yarn ${MODE}