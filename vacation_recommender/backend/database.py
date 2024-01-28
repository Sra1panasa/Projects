import mysql.connector

def get_db_connection():
    connection = mysql.connector.connect(
        host='localhost',
        user='root',  # Your database username
        passwd='root',  # Your database password
        database='vacation'
    )
    return connection
