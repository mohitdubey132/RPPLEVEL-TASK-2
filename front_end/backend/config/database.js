const mongoose = require('mongoose');

exports.createDatabase = () => {
  mongoose.set('strictQuery', true);
  mongoose
    .connect(process.env.mongoURL1 || 'mongodb://127.0.0.1:27017/login', { useNewUrlParser: true })
    .then(() => console.log('connection successfull'));
}