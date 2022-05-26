import React from "react";
import "./resource/book.css";
const BookLocation = () => {
  return (
    <div class="book-con">
      <div class="book-main">
        <div class="top-con">
          <h1>Booking Summary</h1>
        </div>
        <div class="bot-con">
          <div class="book-first">
            <div class="book-info">
              <h3>Tell us a bit about</h3>
              <p>
                if you are not login{" "}
                <span>
                  <a href="">click here</a>
                </span>
              </p>
            </div>
            <form action="">
              <div class="f-sec">
                <div class="f-1-sec">
                  <label for="">First name</label>
                  <input type="text" />
                </div>
                <div class="f-1-sec">
                  <label for="">Last name</label>
                  <input type="text" />
                </div>
              </div>
              <div class="s-sec">
                <div class="s-2-sec">
                  <label for="">Phone No</label>
                  <input type="text" />
                </div>
                <div class="s-2-sec">
                  <label for="">City</label>
                  <input type="text" />
                </div>
              </div>
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
            </form>
          </div>
          <div class="book-second">
            <div class="book-sub-1">
              <h3>
                City : <span> Lucknow</span>
              </h3>
              <h3>
                Address :{" "}
                <span>
                  Pratibha Jewellers, RWWV+PRW, Near Basant Cinema, Sushanpura,
                  Hazratganj, Lucknow, Uttar Pradesh 226001
                </span>
              </h3>
              <h3>
                Space : <span>6 * 4 sqft</span>
              </h3>
              <h3>
                Date : <span>Lucknow</span>
              </h3>
              <h3>
                total Price : <span>500 rs</span>
              </h3>
            </div>
            <div class="book-sub-2">
              <button>Proceed to payment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookLocation;
