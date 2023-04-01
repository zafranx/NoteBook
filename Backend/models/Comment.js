const mongoose = require("mongoose");
const { Schema } = mongoose;
const CommentSchema = new Schema({
  //   user: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "user",
  //   },
  userName: {
    type: String,
    // required: true,
  },
  commentText: {
    type: String,
    required: true,
    // agar unique true hatane ke bad bhi descreption nhi  add ho or erro batae to database se Note ka collection delete kr de to shi ho jaega
  },
  date: {
    type: Date,
    default: Date.now,
  },
  buff: Buffer,
});
module.exports = mongoose.model("comments", CommentSchema);
