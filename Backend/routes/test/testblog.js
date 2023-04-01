// const express = require("express");
// const router = express.Router();
// // const fetchuser = require("../middleware/fetchuser");
// const Comment = require("../models/Comment");
// const BlogPost = require("../models/BlogPost");
// const multer = require("multer");
// const path = require("path");
// // const { body, validationResult } = require("express-validator");

// //  ROUTE:1 add coomments from blog /api/blog/addcomment
// router.post("/addcomment", async (req, res) => {
//   try {
//     //  name and comment  request from body or frontend comment form
//     const { userName, commentText } = req.body;
//     // If there are errors, return Bad request and the errors
//     // const errors = validationResult(req);
//     // if (!errors.isEmpty()) {
//     //   return res.status(400).json({ errors: errors.array() });
//     // }

//     const comments = new Comment({
//       userName,
//       commentText,
//       //   user: req.user.id, // it is come from fetch user
//     });
//     //   this  note.save save note in database and also make collection if no collection exist
//     const savedComment = await comments.save();
//     res.json(savedComment);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// });
// //  ROUTE:2 get coomments from blog /api/blog/getcomment
// router.get("/getcomment", async (req, res) => {
//   try {
//     const comments = await Comment.find();
//     res.json(comments);
//     console.log(comments);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// });

// // ROUTE 3: Update an existing Comment using: PUT "/api/blog/updatecomment".

// router.put("/updatecomment/:id", async (req, res) => {
//   const { userName, commentText } = req.body;
//   try {
//     // Create a newNote object
//     const newComment = {};
//     if (userName) {
//       newComment.userName = userName;
//     }
//     if (commentText) {
//       newComment.commentText = commentText;
//     }

//     console.log(req.params.id);
//     // Find the note to be updated and update it
//     let comment = await Comment.findById(req.params.id);
//     console.log(comment);
//     //   if (!user) {
//     //     return res.status(404).send("Not Found");
//     //   }
//     // Allow updation only if user owns this Note

//     //   if (comment.user.toString() !== req.user.id) {
//     //     return res.status(401).send("Not Allowed");
//     //   }
//     comment = await Comment.findByIdAndUpdate(
//       req.params.id,
//       { $set: newComment },
//       { new: true }
//     );
//     res.json({ comment });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// });
// router.delete("/deletecomment/:id", async (req, res) => {
//   try {
//     console.log(req.params.id);
//     // Find the note to be delete and delete it
//     let comment = await Comment.findById(req.params.id);
//     if (!comment) {
//       return res.status(404).send("Not Found");
//     }
//     // Allow deletion only if user owns this Note
//     //   if (comment.user.toString() !== req.user.id) {
//     //     return res.status(401).send("Not Allowed");
//     //   }
//     comment = await Comment.findByIdAndDelete(req.params.id);
//     console.log(req.params.id);

//     res.json({ Success: "Comment has been deleted", comment: comment });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// });

// // Add post Api
// // for thumbnail
// // router.use("/uploads", express.static("uploads"));
// // router.use(express.urlencoded({ extended: true }));
// // var storage = multer.diskStorage({
// //   destination: (req, file, cb) => {
// //     cb(null, "../public/BlogImages");
// //   },
// //   filename: (req, file, cb) => {
// //     cb(null, Date.now() + path.extname(file.originalname)); //Appending extension
// //   },
// // });

// // const upload = multer({
// //   storage: storage,
// // });
// // // upload.fields - for multiple and single both
// // const cpUpload = upload.fields([
// //   { name: "thumbnail", maxCount: 1 },
// //   // { name: "gallery", maxCount: 10 },
// // ]);


// const upload = multer({
//   storage: multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "../public/BlogImages");
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.filename + "-" + Date.now() + ".jpg");
//     },
//   }),
// }).single("thumbnail")

// router.post("/addpost", upload, async (req, res) => {
//   const thumbnail = req.files["thumbnail"];

//   console.log(thumbnail);
//   try {
//     const obj = JSON.parse(JSON.stringify(req.body));
//     //  name and comment  request from body or frontend comment form
//     const { title, thumbnail, content, tag } = req.body;
//     console.log(req.body);
//     // If there are errors, return Bad request and the errors
//     // const errors = validationResult(req);
//     // if (!errors.isEmpty()) {
//     //   return res.status(400).json({ errors: errors.array() });
//     // }

//     const blogpost = new BlogPost({
//       title: obj.title,
//       content: obj.content,
//       tag: obj.tag,
//       // title,
//       // content,
//       // tag,
//       //   user: req.user.id, // it is come from fetchuser
//     });

//     if (thumbnail) {
//       blogpost.thumbnail = thumbnail.path;
//     }
//     const savedPost = await blogpost
//       .save()
//       .then(() => res.send("Successfully Submitted Post"));
//     res.json(savedPost);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const multer = require("multer");
const BlogPost = require("../../models/BlogPost");

// Create a Multer storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../public/BlogImages");
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split(".").pop();
    cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
  },
});

// Create a Multer upload object
const upload = multer({ storage });

// Create a new blog post
router.post("/", upload.single("image"), async (req, res) => {
  const { title, content, tag } = req.body;

  try {
    const newBlog = await BlogPost.create({
      title,
      image: req.file.path,
      content,
      tag,
    });

    res.status(201).json({ success: true, data: newBlog });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

module.exports = router;
