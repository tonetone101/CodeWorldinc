const Review = require("../models/review");
const formidable = require("formidable");
const fs = require("fs");
const _ = require("lodash");

exports.getreview = (req, res, next) => {
  const review = Review.find()
    // .populate("reviewedBy", "_id name photo role ")
    .select("_id body name businessName photo created")
    .sort({ created: -1 })
    .then((review) => {
      res.json(review);
    })
    .catch((err) => console.log(err));
};

exports.reviewById = (req, res, next, id) => {
  Review.findById(id)
    .populate("reviewedBy", "_id name role")
    .select("_id body name businessName created photo")
    .exec((err, review) => {
      if (err || !review) {
        return res.status(400).json({
          error: err,
        });
      }
      req.review = review;
      next();
    });
};

exports.createreview = (req, res, next) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded",
      });
    }
    let review = new Review(fields);

    // req.profile.hashed_password = undefined;
    // req.profile.salt = undefined;
    review.reviewedBy = req.profile;
    if (files.photo) {
      review.photo.data = fs.readFileSync(files.photo.path);
      review.photo.contentType = files.photo.type;
    }
    review.save((err, result) => {
      res.json(result);
    });
  });
};

exports.updatereview = (req, res, next) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Photo could not be uploaded",
      });
    }
    // save review
    let review = req.review;
    review = _.extend(review, fields);
    review.updated = Date.now();

    if (files.photo) {
      review.photo.data = fs.readFileSync(files.photo.path);
      review.photo.contentType = files.photo.type;
    }

    review.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      res.json(review);
    });
  });
};

exports.deletereview = (req, res) => {
  let review = req.review;
  review.remove((err, review) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json({
      message: "review deleted successfully",
    });
  });
};

exports.photo = (req, res, next) => {
  res.set("Content-Type", req.review.photo.contentType);
  return res.send(req.review.photo.data);
};

exports.singlereview = (req, res) => {
  return res.json(req.review);
};

exports.isAdmin = (req, res, next) => {
  let sameUser =
    req.review && req.auth && req.review.reviewedBy._id == req.auth._id;
  let adminUser = req.review && req.auth && req.auth.role === "admin";

  console.log("req.review ", req.review, " req.auth ", req.auth);
  console.log("SAMEUSER: ", sameUser, " ADMINUSER: ", adminUser);

  let isAdmin = sameUser || adminUser;

  if (!isAdmin) {
    return res.status(403).json({
      error: "User is not authorized",
    });
  }
  next();
};
