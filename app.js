// const path = require('path');

// const express = require('express');
// const bodyParser = require('body-parser');

// const errorController = require('./controllers/error');


// const app = express();

// app.set('view engine', 'ejs');
// app.set('views', 'views');

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');
// const sequelize = require('./util/database');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin', adminRoutes);
// app.use(shopRoutes);

// app.use(errorController.get404);

// sequelize
// .sync()
// .then((result)=>{
//   console.log(result);
//   app.listen(3000);
// })
// .catch((err)=>{
//   console.log(err);
// })

require('dotenv').config();
const path = require("path");
const fs=require('fs');

const express = require("express");
const bodyParser = require("body-parser");

const sequelize = require("./util/database");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const morgan=require("morgan");

const app = express();

app.use(cors());

app.set("view engine", "ejs");
app.set("views", "views");

// const productRoutes = require("./routes/product");
// const todosRoutes = require("./routes/todos");
const userRoutes = require("./routes/user");
const expenseRoutes = require("./routes/expense");
const purchaseRoutes = require("./routes/purchase");
const premiumRoutes = require("./routes/premium");
const forgotpasswordRoutes=require("./routes/password");
const User = require('./models/user');
const Expense = require('./models/expense');
const Order = require('./models/order');
const Forgotpassword=require('./models/password');
const FileUploaded = require('./models/fileuploaded');

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));


const accessLogStream=fs.createWriteStream(
  path.join(__dirname,'access.log'),
  {flags:'a'}
  );

app.use("/user", userRoutes);
app.use("/expense", expenseRoutes);
app.use("/purchase", purchaseRoutes);
app.use("/premium", premiumRoutes);
app.use("/password",forgotpasswordRoutes);
// app.use(errorCoyntroller.get404);


app.use(helmet());
app.use(compression());
app.use(morgan('combined',{stream:accessLogStream}));

User.hasMany(Expense);
Expense.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

User.hasMany(Forgotpassword);
Forgotpassword.belongsTo(User);

User.hasMany(FileUploaded);
FileUploaded.belongsTo(User);


app.get('/products/:id', function (req, res, next) {
  res.json({ msg: 'This is CORS-enabled for all origins!' });
});

const PORT = process.env.PORT || 3000;

sequelize
  // .sync({force:true})
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(PORT, function () { 
      console.log(`CORS-enabled web server listening on port ${PORT}`)
    });
  })
  .catch((err) => console.log(err));
