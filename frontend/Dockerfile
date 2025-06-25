FROM nginx
RUN rm -rf /usr/share/nginx/html/*
COPY code /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY expense.conf /etc/nginx/conf.d/expense.conf
RUN rm -rf /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf