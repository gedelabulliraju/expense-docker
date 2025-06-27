FROM nginx
RUN rm /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf
RUN rm /usr/share/nginx/html/*
COPY code /usr/share/nginx/html
COPY code/index.html /usr/share/nginx/html/index.html