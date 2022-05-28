import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import app_config from "../../config";
import "./resource/book.css";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";

const BookLocation = () => {
  const navigate = useNavigate();

  const url = app_config.backend_url;

  const { id } = useParams();
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const stripe = useStripe();
  const elements = useElements({});
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
      base: {
        padding: "0.5rem",
        iconColor: "#c4f0ff",
        color: "#000",
        fontWeight: 500,
        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
        fontSize: "16px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": {
          color: "#fce883",
        },
        "::placeholder": {
          color: "#87bbfd",
        },
      },
      invalid: {
        iconColor: "#ffc7ee",
        color: "#ffc7ee",
      },
    },
  };

  const [isPaymentLoading, setPaymentLoading] = useState(false);

  const getIntent = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: location.price * 100 }),
    };
    return fetch(url + "/create-payment-intent", requestOptions).then(
      (response) => response.json()
    );
  };

  const checkoutSubmit = () => {
    fetch(url + "/booking/add/", {
      method: "POST",
      body: JSON.stringify({
        location: location._id,
        user: currentUser._id,
        createdAt: new Date(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Location Booked Successfully",
          });
          navigate("/user/managebooking");
        });
      }
    });
  };

  const payMoney = async (e) => {
    e.preventDefault();
    getIntent().then((res) => {
      console.log(res);
      let clientSecret = res.client_secret;

      completePayment(clientSecret);
    });
  };

  const completePayment = async (key) => {
    const paymentResult = await stripe.confirmCardPayment(key, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser.name,
        },
      },
    });

    setPaymentLoading(false);
    if (paymentResult.error) {
      alert();
      Swal.fire({
        icon: "error",
        title: "Payment Failed",
        text: paymentResult.error.message,
      });
      console.log(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        console.log(paymentResult);
        checkoutSubmit();
      }
    }
  };

  const fetchLocData = () => {
    fetch(url + "/location/getbyid/" + id).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          setLocation(data);
          setLoading(false);
          console.log(data);
        });
      }
    });
  };

  useEffect(() => {
    fetchLocData();
  }, []);

  const showLocDetails = () => {
    if (!loading) {
      return (
        <div className="card">
          <div className="card-header">
            <h3 className="mb-0">Booking Summary</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div class="t-sec">
                  <div class="t-3-sec">
                    <label for="">Starting Date</label>
                    <input type="date" />
                  </div>
                  <div class="t-3-sec">
                    <label for="">Ending Date</label>
                    <input type="date" />
                  </div>
                </div>
                <form onSubmit={payMoney}>
                  <CardElement className="card" options={CARD_OPTIONS} />

                  <Button
                    disabled={isPaymentLoading}
                    className="mt-5 w-100"
                    variant="contained"
                    color="secondary"
                    type="submit"
                  >
                    {isPaymentLoading
                      ? "Loading..."
                      : `Pay ₹${location.price}/-`}
                  </Button>
                </form>
              </div>
              <div className="col-md-6">
                <div class="book-sub-1">
                  <h3>
                    City : <span> {location.city}</span>
                  </h3>
                  <h3>
                    Address : <span>{location.address}</span>
                  </h3>
                  <h3>
                    Space : <span>{location.totalSpace}</span>
                  </h3>

                  <h3>
                    total Price : <span>{location.price}</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer"></div>
        </div>
      );
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <div className="container" style={{ paddingTop: "10rem" }}>
        {showLocDetails()}
      </div>
    </div>
  );
};

export default BookLocation;
