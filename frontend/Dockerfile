FROM nginx
EXPOSE 80
RUN rm /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY code /usr/share/nginx/html/
