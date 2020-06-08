import {loadStripe} from '@stripe/stripe-js';

const stripe = async () => { return await loadStripe(process.env.STRIPE_PUBLIC_KEY)};

export default stripe;