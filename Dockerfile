FROM node:8-wheezy

ARG buildtime_variable=staging
ENV NODE_ENV=$buildtime_variable

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install

EXPOSE 8888
#Run the application.
CMD npm start