const express = require("express");
const {
  getreview,
  createreview,
  reviewById,
  singlereview,
  photo,
  updatereview,
  deletereview,
  isAdmin,
} = require("../controllers/review");
const { createreviewValidator } = require("../../validator");
// const { requireSignin } = require('../controllers/auth');
const { userById } = require("../../general/controllers/user");

router = express.Router();

router.get("/review", getreview);
router.get("/review/:reviewId", singlereview);
router.post("/review/new", createreview);
router.put("/review/edit/:reviewId", updatereview);
router.delete("/review/delete/:reviewId", deletereview);

router.get("/review/photo/:reviewId", photo);

router.param("userId", userById);
router.param("reviewId", reviewById);

module.exports = router;
