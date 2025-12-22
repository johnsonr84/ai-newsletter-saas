import { PricingCards } from "../dashboard/pricing-cards";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Choose the plan that works best for you. Cancel or upgrade anytime.
          </p>
        </div>

        <div className="mx-auto mt-16 flex justify-center">
          <PricingCards />
        </div>

        <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-500">
          All plans include unlimited newsletter generation. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
