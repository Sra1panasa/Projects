from flask import Flask
from flask import Flask, jsonify, request
from database import get_db_connection
from flask import jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/destinations')
def get_destinations():
    search_query = request.args.get('search', '')  # Get search parameter
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    query = "SELECT * FROM destinations WHERE name LIKE %s"
    cursor.execute(query, ('%' + search_query + '%',))
    destinations = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(destinations)

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)
