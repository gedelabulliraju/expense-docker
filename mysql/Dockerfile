# FROM mysql:8.0
# ENV MYSQL_ROOT_PASSWORD=ExpenseApp@1
# RUN groupadd expense && \
#     useradd -g expense expense && \
#     chown -R expense:expense /var/lib/mysql /var/run/mysqld /docker-entrypoint-initdb.d
# ADD scripts/*.sql /docker-entrypoint-initdb.d
# USER expense

FROM mysql:8.0

# రూట్ పాస్‌వర్డ్ సెటప్
ENV MYSQL_ROOT_PASSWORD=ExpenseApp@1

# SQL స్క్రిప్ట్‌లు కాపీ చేయడం
ADD scripts/*.sql /docker-entrypoint-initdb.d/

# USER expense సృష్టించడం అవసరం లేదు, ఎందుకంటే mysql ఇమేజ్ లో internally mysqld root గా run అవుతుంది
# కాబట్టి, USER expense వాడకండి

# Volume permission కోసం (optional fix if persistent volume used)
RUN mkdir -p /var/lib/mysql && chown -R mysql:mysql /var/lib/mysql

# ENTRYPOINT మరియు CMD defaultగా ఉన్న mysql ఇమేజ్ వాడుతుంది
