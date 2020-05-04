const express = require("express");
const {
  getpost,
  createpost,
  postById,
  singlepost,
  photo,
  updatepost,
  deletepost,
  isAdmin,
} = require("../controllers/post");
const { createpostValidator } = require("../../validator");
// const { requireSignin } = require('../controllers/auth');
const { userById } = require("../../general/controllers/user");

router = express.Router();

router.get("/post", getpost);
router.get("/post/:postId", singlepost);
router.post("/post/new/:userId", createpost, createpostValidator);
router.put("/post/edit/:postId", updatepost);
router.delete("/post/delete/:postId", deletepost);

router.get("/post/photo/:postId", photo);

router.param("userId", userById);
router.param("postId", postById);

module.exports = router;
