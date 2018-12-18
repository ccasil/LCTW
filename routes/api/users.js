const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load Input Validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post("/register", (req, res) => {
  console.log("333333333333333333333333", req.body);
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      // const avatar = gravatar.url(req.body.email, {
      //     s: '200', // Size
      //     r: 'pg', // Rating
      //     d: 'mm' // Default
      // });

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,

        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route   GET api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = {
          id: user.id,
          name: user.name,
          admin: user.adminLevel
        }; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

// @route   GET api/users
// @desc    Get users
// @access  Public
router.get("/", (req, res) => {
  User.find({})
    .sort({ date: -1 })
    .then(users => {
      console.log("get", users), res.json(users);
    })
    .catch(err => res.status(404).json({ nousersfound: "No users found" }));
});

// @route   GET api/users/:id
// @desc    Get eventful by id
// @access  Public
router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      console.log(user), res.json(user);
    })
    .catch(err =>
      res.status(404).json({ nouserfound: "No user found with that ID" })
    );
});

// @route   POST api/users/:id
// @desc    change user to admin
// @access  Private
router.post(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findOne({ _id: req.params.id })
      .then(user => {
        console.log("1231231231", user);
        if (user) {
            if(user.adminLevel)
                user.adminLevel = false;
            else
                user.adminLevel = true;
        }
        user.save().then(user => res.json(user));
      })
      .catch(err => res.status(404).json({ usernotfound: "No post found" }));
  }
);

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      admin: req.user.adminLevel
    });
  }
);

// @route   DELETE api/users
// @desc    Delete user
// @access  Private
router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log("at route", req.body);

    User.findOneAndRemove({ _id: req.user.id }).then(() =>
      res.json({ success: true })
    );
  }
);

module.exports = router;
