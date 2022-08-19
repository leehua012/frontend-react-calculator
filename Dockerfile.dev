FROM node:18-alpine3.15
ENV REACT_APP_NAME="My Calculator"
WORKDIR /app
COPY package.json .
RUN npm install --legacy-peer-deps
COPY . .
EXPOSE 3000
CMD ["npm", "start"]