var mongoose = require('mongoose');

// Clean test database after tests
after(function (done) {
  mongoose.connect('mongodb://localhost/test_express-react-todo', function () {
    mongoose.connection.db.dropDatabase(function () {
      done();
    })
  });
});
