/**
 * This is a singleton to ensure we only instantiate Stripe once.
 */
import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe('pk_test_51IQF2lKlmY9CJVOF3aP1C28brEFAS2Qtr5PGK0CTzfHpgDBgBOIfLkJXjKWPH6ImeBYEcGq7ovvZE4RHvB5LXlI500fntxGX5D');
  }
  return stripePromise;
};

export default getStripe;
