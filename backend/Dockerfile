FROM node:slim AS build

WORKDIR /app
COPY package*.json ./
COPY tsconfig.json ./
COPY . ./
RUN npm install
RUN npm run build

FROM node:slim
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app ./
RUN npm ci --omit=dev
EXPOSE 8080
CMD ["npm", "start"]
