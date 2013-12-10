service nginx stop
PORT=80 MONGO_URL=mongodb://localhost:27017/fail ROOT_URL=http://failitforward.com/ nohup forever ~/FailItForward/bundle/main.js
