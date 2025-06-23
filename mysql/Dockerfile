FROM mysql:8.0
ENV MYSQL_ROOT_PASSWORD=ExpenseApp1
ADD scripts/ /docker-entrypoint-initdb.d/
# The above line copies all SQL scripts from the 'scripts' directory into the MySQL container   
# at the specified path, which is executed when the container is started for the first time.
# This allows you to initialize the database with tables, data, or any other setup required.    