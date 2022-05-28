// importing express
const express = require("express");
const UserRouter = require("./routers/UserRouter");
const LocationRouter = require("./routers/locationRouter");
const BookingRouter = require("./routers/bookingRouter");
const cors = require("cors");

const stripe_sk = "sk_test_4ypbMh4aR9gRNnUkQCwgOyCT00rSoAbXzZ";
const stripe = require("stripe")(stripe_sk);

// initialize express
const app = express();

// defining port
const port = 5000;

// for reading json data
app.use(express.json());

// for allowing frontrend
app.use(cors({ origin: ["http://localhost:3000"] }));

// middleware
app.use("/user", UserRouter);
app.use("/location", LocationRouter);
app.use("/booking", BookingRouter);

// endpoint or route
app.get("/", (req, res) => {
  res.send("you got a reponse");
});

app.post("/create-payment-intent", async (req, res) => {
  const data = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: data.amount,
    currency: "inr",
  });
  res.status(200).json(paymentIntent);
});

app.get("/home", (req, res) => {
  res.send("you have reached home");
});

app.get("*", (req, res) => {
  res.send("invalid request");
});

// starting the server
app.listen(port, () => {
  console.log("server started on 5000");
});
