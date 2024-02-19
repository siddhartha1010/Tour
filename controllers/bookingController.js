const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Tour = require("../models/tourModel");
const User = require("../models/userModel");
const Booking = require("../models/bookingModel");
const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  // 1) Get the currently booked tour
  const tour = await Tour.findById(req.params.tourId);
  // console.log(tour);

  // 2) Create checkout session
  // const session = await stripe.checkout.sessions.create({
  //   payment_method_types: ["card"],
  //   // success_url: `${req.protocol}://${req.get('host')}/my-tours/?tour=${
  //   //   req.params.tourId
  //   // }&user=${req.user.id}&price=${tour.price}`,
  //   success_url: `${req.protocol}://${req.get("host")}/my-tours?alert=booking`,
  //   cancel_url: `${req.protocol}://${req.get("host")}/tour/${tour.slug}`,
  //   customer_email: req.user.email,
  //   client_reference_id: req.params.tourId,
  //   product.name

  //   line_items: [
  //     {
  //       name: `${tour.name} Tour`,
  //       description: tour.summary,
  //       images: [
  //         `${req.protocol}://${req.get("host")}/img/tours/${tour.imageCover}`,
  //       ],
  //       amount: tour.price * 100,
  //       currency: "usd",
  //       quantity: 1,
  //     },
  //   ],
  // });


// const stripe = require('stripe')('sk_test_26PHem9AhJZvU623DfE1x4sd');
const session = await stripe.checkout.sessions.create({
  success_url: `${req.protocol}://${req.get("host")}/my-tours?alert=booking`,
    line_items: [
    {
      price_data: {
        currency: 'usd',
        product_data: {
          name: tour.name,
          description: tour.summary,
          // images: ['https://example.com/your-product-image.jpg'],
        },
      },
      // price: 'price_1MotwRLkdIwHu7ixYcPLm5uZ',
      quantity: 1,
    },
  ],
  mode: 'payment',
});

  // const session = await stripe.checkout.sessions.create({
  //   payment_method_types: ["card"],
  //   mode: "payment",
  //   // success_url: `${req.protocol}://${req.get('host')}/my-tours/?tour=${
  //   //   req.params.tourId
  //   // }&user=${req.user.id}&price=${tour.price}`,
  //   success_url: `${req.protocol}://${req.get("host")}/my-tours?alert=booking`,
  //   cancel_url: `${req.protocol}://${req.get("host")}/tour/${tour.slug}`,
  //   customer_email: req.user.email,
  //   client_reference_id: req.params.tourId,
  //   // line_items:[
  //   //   {
       
  //   //       product_data: {
  //   //         name: `${tour.name} Tour`,
  //   //         description: tour.summary,
  //   //         qunatity:1
  //   //         // images: [
  //   //         //   `${req.protocol}://${req.get("host")}/img/tours/${tour.imageCover}`,
  //   //         // ],
     
  //   //   }
  //   // }
  //   // ]

  //   line_items: [
  //     {
  //       name: `${tour.name} Tour`,
  //       description: tour.summary,
  //       // images: [
  //       //   `${req.protocol}://${req.get("host")}/img/tours/${tour.imageCover}`,
  //       // ],
  //       amount: tour.price * 100,
  //       currency: "usd",
  //       quantity: 1,
  //     },
  //   ],
  // });

  // 3) Create session as response
  res.status(200).json({
    status: "success",
    session,
  });
});
