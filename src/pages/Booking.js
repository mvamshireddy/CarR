          {/* Payment Page */}
          {activeTab === "payment" && selectedCar && (
            <div className="payment-details">
              <h2>Payment & Confirmation</h2>

              {/* Booking Summary Section */}
              <div className="booking-summary">
                <h3>Booking Summary</h3>
                <div className="summary-details">
                  <div className="left-column">
                    <p>
                      <strong>Date:</strong> {bookingDetails.pickupStartDate}
                    </p>
                    <p>
                      <strong>Duration:</strong> {calculateDurationInHours()} hours
                    </p>
                    <p>
                      <strong>Pickup:</strong> {bookingDetails.pickupLocation}
                    </p>
                    <p>
                      <strong>Drop-off:</strong> {bookingDetails.dropoffLocation}
                    </p>
                  </div>
                  <div className="right-column">
                    <p>
                      <strong>Time:</strong> {bookingDetails.pickupStartTime} to {bookingDetails.dropoffEndTime}
                    </p>
                    <p>
                      <strong>Passengers:</strong> {selectedCar.passengers}
                    </p>
                  </div>
                </div>
              </div>

              {/* Price Summary */}
              <div className="price-summary">
                <div>
                  <span>Vehicle Rental ({calculateDurationInHours()} hours):</span>
                  <span>${calculateRentalCost()}</span>
                </div>
                <div>
                  <span>Service Fee:</span>
                  <span>${SERVICE_FEE}</span>
                </div>
                <hr />
                <div>
                  <strong>Total:</strong>
                  <strong>${calculateTotalCost()}</strong>
                </div>
              </div>

              {/* Payment Form */}
              <form className="payment-form">
                <h3>Payment Method</h3>
                <div>
                  <label>
                    <input type="radio" name="paymentMethod" checked readOnly />
                    Credit Card Payment
                  </label>
                </div>
                <label>
                  Cardholder Name
                  <input type="text" placeholder="Name as it appears on the card" />
                </label>
                <label>
                  Card Number
                  <input type="text" placeholder="1234 5678 9012 3456" />
                </label>
                <div className="card-details">
                  <label>
                    Expiry Date
                    <input type="text" placeholder="MM/YY" />
                  </label>
                  <label>
                    CVV
                    <input type="text" placeholder="123" />
                  </label>
                </div>
              </form>

              {/* Action Buttons */}
              <div className="action-buttons">
                <button className="cancel-button" onClick={() => handleTabClick("contact")}>
                  Back
                </button>
                <button className="continue-button">Confirm Booking</button>
              </div>
            </div>
          )}