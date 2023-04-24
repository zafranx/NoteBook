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
// router.use("/blogimage", express.static("blogimage")); isko index.js file eme use karte hai
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
// post blog api
router.post("/addpost", cpUpload, async (req, res) => {
  const profile = req.files["profile"][0];
  // console.log("profile", profile);

  try {
    const obj = JSON.parse(JSON.stringify(req.body));
    // console.log("body", req.body);
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
    // else{
    //   blogpost.profile = null;
    // }

    await blogpost
      .save()
      .then(() => res.send("Successfully Submitted Post"))
      .catch((err) => console.log(err));

    // console.log("blogpost", blogpost);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
//  get blog data api
router.get("/getposts", async (req, res) => {
  try {
    const blogpost = await BlogPost.find();
    res.json(blogpost);
    // console.log(blogpost);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
router.get("/getpostsbyid/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const blogpost = await BlogPost.findById(req.params.id);
    res.json(blogpost);
    // console.log(blogpost);
    if (!blogpost) {
      return res.status(404).send("Not Found");
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
// Delete blog data
router.delete("/deleteblog/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    // Find the note to be delete and delete it
    let blogpost = await BlogPost.findById(req.params.id);
    if (!blogpost) {
      return res.status(404).send("Not Found");
    }
    // Allow deletion only if user owns this Note
    // if (blogpost.user.toString() !== req.user.id) {
    //   return res.status(401).send("Not Allowed");
    // }
    blogpost = await BlogPost.findByIdAndDelete(req.params.id);
    // console.log(req.params.id);

    res.json({ Success: "Blog Data has been deleted", blogpost: blogpost });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
// Update blog data
router.put("/updateblog/:id", cpUpload, async (req, res) => {
  const profile = req.files;
  // const profile = req.files["profile"][0];

  const { title, content, tag } = req.body;
  try {
    console.log("profile", profile);
    console.log("bodys", req.body);
    console.log("file", req.files);

    // Create a newNote object
    const newBlog = {};
    if (title) {
      newBlog.title = title;
    }
    if (profile) {
      newBlog.profile = profile.path;
    }
    // else (!profile){
    //   newBlog.profile = null;
    // }
    if (content) {
      newBlog.content = content;
    }
    if (tag) {
      newBlog.tag = tag;
    }

    console.log(req.params.id);
    // Find the blog to be updated and update it
    let Blogdata = await BlogPost.findById(req.params.id);
    // console.log(Blogdata);

    Blogdata = await BlogPost.findByIdAndUpdate(
      req.params.id,
      { $set: newBlog },
      { new: true }
    );
    res.json({ Success: "Blog has been Updated", Blogdata: Blogdata });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
