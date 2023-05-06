const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./util/database");
const User = require("./models/UserModel");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.send("Form is submitted");
});

app.get("/user/add-user", (req, res, next) => {
  res.sendFile(__dirname + "/views/form.html");
});

app.post("/user/add-user", async (req, res, next) => {
  try {
    if (!req.body.phonenumber) {
      throw new Error("Phone number is mendatory");
    }

    const name = req.body.name;
    const email = req.body.email;
    const phonenumber = req.body.phonenumber;

    const data = await User.create({
      name: name,
      email: email,
      number: phonenumber,
    });
    res.status(201).json({ newUserDetail: data });
    //res.redirect('/user/get-users')
  } catch (err) {
    console.log(err);
  }
});
app.get("/user/get-users", async (req, res, next) => {
  const users = await User.findAll();
  res.status(200).json({ allUsers: users });
});

app.delete("/user/delete-user/:id", async (req, res, next) => {
  const uId = req.params.id;
  await User.destroy({ where: { id: uId } });
  res.sendStatus(200);
});

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(3000);
  })
  .catch((err) => console.log(err));