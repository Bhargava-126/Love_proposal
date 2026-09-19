FROM nginx
EXPOSE 80
MAINTAINER Teja
LABEL this is our first project
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/ 
