const express = require("express");
const tourController = require("./../controllers/tourController");
const authController = require("./../controllers/authController");
const reviewRouter = require("./../routes/reviewRoutes");

const router = express.Router();

// router.param('id', tourController.checkID);

// POST /tour/234fad4/reviews
// GET /tour/234fad4/reviews

router.use("/:tourId/reviews", reviewRouter);


router.route("/").get(tourController.getAllTours).post(
  // authController.protect,
  // authController.restrictTo("admin", "lead-guide"),
  tourController.createTour
);

router
  .route("/:id")
  .get(tourController.getTour)
  .patch(
    // authController.protect,
    // authController.restrictTo("admin", "lead-guide"),
    tourController.updateTour
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin", "lead-guide"),
    tourController.deleteTour
  );

module.exports = router;
