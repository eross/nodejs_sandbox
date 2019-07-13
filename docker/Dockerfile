FROM node:10
WORKDIR /app
COPY app/package*.json ./
RUN npm install
RUN useradd -m -u 501 ericr
COPY app/* /app/
EXPOSE 8080
#CMD ["node", "server.js"]
CMD ["bash","-i"]

