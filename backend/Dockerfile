FROM node:lts-alpine3.21
EXPOSE 8080
ENV DB_HOST="mysql"
RUN mkdir /opt/server
WORKDIR /opt/server
RUN adduser -S expense && add group -S expense
RUN chown -R expense:expense /opt/server
USER expense
COPY package.json .
COPY *.js .
RUN npm install
CMD ["node", "index.js"]
