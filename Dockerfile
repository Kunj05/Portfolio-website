# Stage 1: Build the application
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

# Stage 2: Set up the production container
FROM node:18-alpine as production

WORKDIR /app

COPY --from=build /app /app

RUN npm install --production --legacy-peer-deps

EXPOSE 3000

CMD ["npm", "start"]
