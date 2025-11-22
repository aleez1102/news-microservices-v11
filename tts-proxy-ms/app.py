from flask import Flask
app=Flask(__name__)
@app.get('/health')
def h():return 'OK'
app.run(host='0.0.0.0',port=3000)