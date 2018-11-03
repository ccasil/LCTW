const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Eventful model
const Eventful = require("../../models/Eventful");
const User = require("../../models/User");

// Validation
const validateEventfulInput = require("../../validation/eventful");
const validateCommentInput = require("../../validation/comment");

// @route   GET api/eventfuls/test
// @desc    Tests eventful route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Eventful Works" }));

// @route   GET api/eventfuls
// @desc    Get eventfuls
// @access  Public
router.get("/", (req, res) => {
  Eventful.find()
    .sort({ date: -1 })
    .then(eventfuls =>  res.json(eventfuls))
    .catch(err => res.status(404).json({ noeventfulsfound: "No eventfuls found" }));
});

// @route   GET api/eventfuls/:id
// @desc    Get eventful by id
// @access  Public
router.get("/:id", (req, res) => {
    Eventful.findById(req.params.id)
    .then(eventful => res.json(eventful))
    .catch(err =>
      res.status(404).json({ noeventfulfound: "No eventful found with that ID" })
    );
});

// @route   POST api/eventfuls
// @desc    Create eventful
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateEventfulInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newEventful = new Eventful({
      title: req.body.title,
      description: req.body.description,
        pictures: req.body.pictures,
      user: req.user.id,
      name: req.user.name
    });

    newEventful.save().then(eventful => res.json(eventful));
  }
);

// @route   DELETE api/eventfuls/:id
// @desc    Delete eventful
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findOne({ user: req.user.id }).then(eventful => {
        Eventful.findById(req.params.id)
        .then(eventful => {
          // Check for eventful owner
          if (eventful.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({
                notauthorized: "User not authorized"
              });
          }

          // Delete
          eventful.remove().then(() => res.json({ success: true }));
        })
        .catch(err =>
          res.status(404).json({ eventfulnotfound: "No eventful found" })
        );
    });
  }
);

// // @route   POST api/eventfuls/like/:id
// // @desc    Like eventful
// // @access  Private
// router.post(
//   "/like/:id",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     Profile.findOne({ user: req.user.id }).then(profile => {
//         Eventful.findById(req.params.id)
//         .then(eventful => {
//           if (eventful.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
//             return res
//               .status(400)
//               .json({ alreadyliked: "User already liked this eventful" });
//           }

//           // Add user id to likes array
//           eventful.likes.unshift({ user: req.user.id });

//           eventful.save().then(eventful => res.json(eventful));
//         })
//         .catch(err =>
//           res.status(404).json({ eventfulnotfound: "No eventful found" })
//         );
//     });
//   }
// );

// // @route   POST api/eventfuls/unlike/:id
// // @desc    Unlike eventful
// // @access  Private
// router.post(
//   "/unlike/:id",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     Profile.findOne({ user: req.user.id }).then(profile => {
//       Post.findById(req.params.id)
//         .then(eventful => {
//           if (eventful.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
//             return res
//               .status(400)
//               .json({ notliked: "You have not yet liked this eventful" });
//           }

//           // Get remove index
//           const removeIndex = eventful.likes
//             .map(item => item.user.toString())
//             .indexOf(req.user.id);

//           // Splice out of array
//           eventful.likes.splice(removeIndex, 1);

//           // Save
//           eventful.save().then(eventful => res.json(eventful));
//         })
//         .catch(err =>
//           res.status(404).json({ eventfulnotfound: "No eventful found" })
//         );
//     });
//   }
// );

// @route   POST api/eventfuls/comment/:id
// @desc    Add comment to eventful
// @access  Private
router.post(
  "/comment/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
      const { errors, isValid } = validateCommentInput(req.body);
    
    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    Eventful.findById(req.params.id)
      .then(eventful => {
        const newComment = { text: req.body.text, name: req.body.name,  user: req.user.id };

        // Add to comments array
        eventful.comments.unshift(newComment);

        // Save
        eventful.save().then(eventful => res.json(eventful));
      })
      .catch(err =>
        res.status(404).json({ eventfulnotfound: "No eventful found" })
      );
  }
);

// @route   DELETE api/eventfuls/comment/:id/:comment_id
// @desc    Remove comment from eventful
// @access  Private
router.delete(
  "/comment/:id/:comment_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
      Eventful.findById(req.params.id)
      .then(eventful => {
        // Check to see if comment exists
        if (eventful.comments.filter(comment => comment._id.toString() === req.params.comment_id).length === 0) {
          return res
            .status(404)
            .json({ commentnotexists: "Comment does not exist" });
        }

        // Get remove index
        const removeIndex = eventful.comments
          .map(item => item._id.toString())
          .indexOf(req.params.comment_id);

        // Splice comment out of array
        eventful.comments.splice(removeIndex, 1);

        eventful.save().then(post => res.json(eventful));
      })
      .catch(err =>
        res.status(404).json({ eventfulnotfound: "No eventful found" })
      );
  }
);

module.exports = router;
