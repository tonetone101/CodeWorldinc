const Post = require("../models/post");
const formidable = require("formidable");
const fs = require("fs");
const _ = require("lodash");

exports.getpost = (req, res, next) => {
  const post = Post.find()
    // .populate("postedBy", "_id name photo role ")
    .select("_id title about photo created")
    .sort({ created: -1 })
    .then((post) => {
      res.json(post);
    })
    .catch((err) => console.log(err));
};

exports.postById = (req, res, next, id) => {
  Post.findById(id)
    .populate("postedBy", "_id name role")
    .select("_id title about created photo")
    .exec((err, post) => {
      if (err || !post) {
        return res.status(400).json({
          error: err,
        });
      }
      req.post = post;
      next();
    });
};

exports.createpost = (req, res, next) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded",
      });
    }
    let post = new Post(fields);

    // req.profile.hashed_password = undefined;
    // req.profile.salt = undefined;
    post.postedBy = req.profile;
    if (files.photo) {
      post.photo.data = fs.readFileSync(files.photo.path);
      post.photo.contentType = files.photo.type;
    }
    post.save((err, result) => {
      res.json(result);
    });
  });
};

exports.updatepost = (req, res, next) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Photo could not be uploaded",
      });
    }
    // save post
    let post = req.post;
    post = _.extend(post, fields);
    post.updated = Date.now();

    if (files.photo) {
      post.photo.data = fs.readFileSync(files.photo.path);
      post.photo.contentType = files.photo.type;
    }

    post.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      res.json(post);
    });
  });
};

exports.deletepost = (req, res) => {
  let post = req.post;
  post.remove((err, post) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json({
      message: "post deleted successfully",
    });
  });
};

exports.photo = (req, res, next) => {
  res.set("Content-Type", req.post.photo.contentType);
  return res.send(req.post.photo.data);
};

exports.singlepost = (req, res) => {
  return res.json(req.post);
};

exports.isAdmin = (req, res, next) => {
  let sameUser = req.post && req.auth && req.post.postedBy._id == req.auth._id;
  let adminUser = req.post && req.auth && req.auth.role === "admin";

  console.log("req.post ", req.post, " req.auth ", req.auth);
  console.log("SAMEUSER: ", sameUser, " ADMINUSER: ", adminUser);

  let isAdmin = sameUser || adminUser;

  if (!isAdmin) {
    return res.status(403).json({
      error: "User is not authorized",
    });
  }
  next();
};
