# dockerise the app
FROM node:lts
WORKDIR /app

EXPOSE 7000

COPY package.json /app

RUN npm install

COPY . ./

CMD ["npm", "start"]