FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
RUN rm /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf
RUN rm /usr/share/nginx/html/*
COPY code /usr/share/nginx/html