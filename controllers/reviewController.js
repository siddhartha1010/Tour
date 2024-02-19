const Review = require("./../models/reviewModel");
const factory = require("./handlerFactory");
const User = require("./../models/userModel");
const catchAsync = require("../utils/catchAsync");
const tour= require("../models/tourModel");
// const catchAsync = require('./../utils/catchAsync');

// exports.setTourUserIds = (req, res, next) => {
//   // Allow nested routes
//   if (!req.body.tour) req.body.tour = req.params.tourId;
//   if (!req.body.user) req.body.user = req.user.id;
//   next();
// };

exports.getAllReviews = factory.getAll(Review);
exports.getReview = factory.getOne(Review);
exports.createReview = factory.createOne(Review);
exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);

// exports.createReview=catchAsync(async(req,res)=>{
//     //!login user bata id lini 
//     const Tour=await tour.findById(req.params.id).populate('reviews');
//     console.log(Tour.id);
//     res.status(204).json({
//         status: "success",
//         data: Tour,
//       });
//     });
//     //!slug bata tour ko id lini
//     //!review lekhni



