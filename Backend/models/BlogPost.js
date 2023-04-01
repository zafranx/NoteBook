const mongoose = require("mongoose");
const { Schema } = mongoose;
const BlogPostSchema = new Schema({
  title: {
    type: String,
    // required: true
  },
  // thumbnail: {
  //   type: String,
  //   // required: true,
  // },
  profile: {
    type: String,
    // required: true
  },
  content: {
    type: String,
    // required: true
  },
  tag: {
    type: String,
    // required: true
  },
  date: {
    type: Date,
    default: Date.now,
  },
  buff: Buffer,
});
module.exports = mongoose.model("blogpost", BlogPostSchema);
