// to show all faculty members
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const reviewSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  businessName: {
    type: String,
  },
  photo: {
    data: Buffer,
    contentType: String,
  },
  postedBy: {
    type: ObjectId,
    ref: "User",
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: Date,
});

module.exports = mongoose.model("Review", reviewSchema);
