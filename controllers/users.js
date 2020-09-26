//Dependencies
const express = require("express");
const router = express.Router();
const jwt = require("jwt-simple");
const passport = require("../config/passport");
const config = require("../config/config");
const Users = require("../models/Users");
const bcrypt = require("bcrypt");

//function to encrypt user's password for DB storage
const generateHash = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8));

// Seed
router.get("/seed", (req, res) => {
  Users.create(
    [
      {
        email: "test@test.com",
        password: generateHash("test"),
        contact: {
          first_name: "Nicolas",
          last_name: "Cage",
          address: {
            street_address: "101 test st.",
            city: "Testville",
            state: "WA",
          },
          number: 2065451683,
        },
        image: "https://avatarfiles.alphacoders.com/146/146246.jpg",
      },
      {
        email: "test1@test.com",
        password: generateHash("test"),
        contact: {
          first_name: "Dave",
          last_name: "Chappelle",
          address: {
            street_address: "102 test st.",
            city: "Testville",
            state: "OH",
          },
          number: 9195188370,
        },
        image:
          "https://hips.hearstapps.com/esq.h-cdn.co/assets/16/16/1461424900-prince-chappelle.png",
      },
    ],
    (err, users) => {
      err ? console.log(err) : console.log("Seeded DB!");
      res.redirect("/");
    }
  );
});

router.post("/signup", (req, res) => {
  if (req.body.email && req.body.password) {
    let newUser = {
      email: req.body.email,
      password: generateHash(req.body.password),
      contact: {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        address: {
          street_address: req.body.street_address,
          city: req.body.city,
          state: req.body.state,
        },
        number: req.body.number,
      },
      image: req.body.image,
    };
    Users.findOne({ email: req.body.email }).then((user) => {
      if (!user) {
        Users.create(newUser).then((user) => {
          if (user) {
            var payload = {
              id: newUser.id,
              exp: "60m",
            };
            var token = jwt.encode(payload, config.jwtSecret);
            console.log(token);
            res.json({
              token: token,
              newUser: newUser,
            });
          } else {
            res.sendStatus(401);
          }
        });
      } else {
        res.sendStatus(401);
      }
    });
  } else {
    res.sendStatus(401);
  }
});

router.post("/login", (req, res) => {
  if (req.body.email && req.body.password) {
    Users.findOne({ email: req.body.email }).then((user) => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          var payload = {
            id: user.id,
            exp: "1m",
          };
          console.log(payload);
          currentUser = user;
          var token = jwt.encode(payload, config.jwtSecret);
          res.json({
            currentUser: currentUser,
            token: token,
          });
        } else {
          res.sendStatus(401);
        }
      } else {
        res.sendStatus(401);
      }
    });
  } else {
    res.sendStatus(401);
  }
});

router.put("/:id", (req, res) => {
  Users.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
    res.json(user);
  });
});

router.delete("/:id", (req, res) => {
  Users.findByIdAndRemove(req.params.id, (err, user) => {
    res.json(user);
  });
});

module.exports = router;
