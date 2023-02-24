const mongoose = require('mongoose');


if (process.env.NODE_ENV === 'production'){
  mongoose.connect('mongodb://localhost/london_budget', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  });

}else{
  mongoose.connect('mongodb://localhost/london_budget_test', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  });
}

module.exports = mongoose.connection;
