const express = require("express");
const router = express.Router();
// const fetchuser = require("../middleware/fetchuser");
const Comment = require("../models/Comment");
const BlogPost = require("../models/BlogPost");
const multer = require("multer");
const path = require("path");
// const { body, validationResult } = require("express-validator");

//  ROUTE:1 add coomments from blog /api/blog/addcomment
router.post("/addcomment", async (req, res) => {
  try {
    //  name and comment  request from body or frontend comment form
    const { userName, commentText } = req.body;
    // If there are errors, return Bad request and the errors
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }

    const comments = new Comment({
      userName,
      commentText,
      //   user: req.user.id, // it is come from fetch user
    });
    //   this  note.save save note in database and also make collection if no collection exist
    const savedComment = await comments.save();
    res.json(savedComment);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
//  ROUTE:2 get coomments from blog /api/blog/getcomment
router.get("/getcomment", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
    console.log(comments);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 3: Update an existing Comment using: PUT "/api/blog/updatecomment".
router.put("/updatecomment/:id", async (req, res) => {
  const { userName, commentText } = req.body;
  try {
    // Create a newNote object
    const newComment = {};
    if (userName) {
      newComment.userName = userName;
    }
    if (commentText) {
      newComment.commentText = commentText;
    }

    console.log(req.params.id);
    // Find the note to be updated and update it
    let comment = await Comment.findById(req.params.id);
    console.log(comment);
    //   if (!user) {
    //     return res.status(404).send("Not Found");
    //   }
    // Allow updation only if user owns this Note

    //   if (comment.user.toString() !== req.user.id) {
    //     return res.status(401).send("Not Allowed");
    //   }
    comment = await Comment.findByIdAndUpdate(
      req.params.id,
      { $set: newComment },
      { new: true }
    );
    res.json({ comment });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
router.delete("/deletecomment/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    // Find the note to be delete and delete it
    let comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).send("Not Found");
    }
    // Allow deletion only if user owns this Note
    //   if (comment.user.toString() !== req.user.id) {
    //     return res.status(401).send("Not Allowed");
    //   }
    comment = await Comment.findByIdAndDelete(req.params.id);
    console.log(req.params.id);

    res.json({ Success: "Comment has been deleted", comment: comment });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// API blog Post with image
router.use("/uploads", express.static("uploads"));
router.use(express.urlencoded({ extended: true }));
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./blogimage");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); //Appending extension
  },
});

const upload = multer({
  storage: storage,
});
const cpUpload = upload.fields([
  { name: "profile", maxCount: 1 },
  // { name: "gallery", maxCount: 10 },
]);

router.post("/addpost", cpUpload, async (req, res) => {
  const profile = req.files["profile"][0];
  console.log("profile", profile);

  try {
    const obj = JSON.parse(JSON.stringify(req.body));
    //  name and comment  request from body or frontend comment form
    console.log("body", req.body);
    // If there are errors, return Bad request and the errors
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }

    const blogpost = new BlogPost({
      title: obj.title,
      content: obj.content,
      tag: obj.tag,
    });

    if (profile) {
      blogpost.profile = profile.path;
    }

    await blogpost
      .save()
      .then(() => res.send("Successfully Submitted Post"))
      .catch((err) => console.log(err));

    console.log("blogpost", blogpost);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
