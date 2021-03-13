const mongoose = require('mongoose');
const app = require('./app');
const PORT = 8000;

mongoose
  .connect('mongodb://localhost:27017/todoDB', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('DB CONNECTION SUCCESFUL');
  });

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
