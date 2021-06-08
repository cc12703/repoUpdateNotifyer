FROM node:12.22.1-alpine


WORKDIR /code
VOLUME /code/data


COPY package*.json ./
RUN npm install 

COPY src ./src
COPY tsconfig.json ./

CMD npm run start