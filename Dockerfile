FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
# 이 줄을 아래처럼 수정합니다!
RUN npm install --omit=dev

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./
COPY server.js ./

USER node
EXPOSE 3000
CMD ["npm", "start"]
