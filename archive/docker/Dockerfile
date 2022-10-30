FROM node:10
RUN npm install
RUN apt-get update
RUN apt-get install vim
RUN apt-get clean
RUN useradd -m -u 501 ericr
RUN mkdir /app
RUN chown ericr:20 /app
USER ericr:20
# use this to install the default packages
WORKDIR /app
COPY app/package*.json ./
RUN npm install
#COPY app/* /app/
EXPOSE 8080
#CMD ["node", "server.js"]
CMD ["bash","-i"]

