const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Create a payment intent
const createPaymentIntent = async (req, res) => {
  try {
    const { amount } = req.body;

    // Ensure amount is provided
    if (!amount) {
      return res.status(400).json({ message: 'Amount is required' });
    }

    // Create a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: 'usd',
      payment_method_types: ['card'],
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error creating payment intent',
      error: error.message,
    });
  }
};

module.exports = { createPaymentIntent };