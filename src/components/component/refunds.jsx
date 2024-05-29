import Link from "next/link"

export function Refunds() {
  return (
    (<div className="flex flex-col min-h-[100dvh] bg-gray-950 text-gray-50">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <BotIcon className="h-6 w-6 text-[#55efc4]" />
          <span className="sr-only">Bot Bazaar Inc.</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-[#55efc4] underline-offset-4"
            href="#">
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:text-[#55efc4] underline-offset-4"
            href="#">
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:text-[#55efc4] underline-offset-4"
            href="#">
            About
          </Link>
          <Link
            className="text-sm font-medium hover:text-[#55efc4] underline-offset-4"
            href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container max-w-4xl px-4 md:px-6 space-y-8">
            <div className="space-y-2">
              <h1
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#55efc4]">
                Cancellation and Refund Policy
              </h1>
              <p className="text-gray-400 md:text-xl">Last updated: May 28, 2024</p>
            </div>
            <div className="prose prose-invert space-y-6">
              <h2>1. Introduction</h2>
              <p>
                At Bot Bazaar Inc., we strive to provide our customers with the best possible experience. However, we
                understand that circumstances may arise where you need to cancel your service or request a refund. This
                Cancellation and Refund Policy outlines the terms and conditions under which we will process your
                cancellation or refund request.
              </p>
              <h2>2. Cancellation Policy</h2>
              <p>
                You may cancel your subscription or service at any time. To initiate a cancellation, please contact our
                support team at
                <a href="#">osh.econnect@gmail.com</a>
                or by submitting a request through our website. We will process your cancellation request within 5
                business days.
              </p>
              <p>
                Please note that cancellation of your subscription or service does not automatically entitle you to a
                refund. Refunds are subject to the terms outlined in the Refund Policy section below.
              </p>
              <h2>3. Refund Policy</h2>
              <p>
                We understand that sometimes things don't go as planned, and you may need to request a refund. We will
                consider refund requests on a case-by-case basis, taking into account the specific circumstances of your
                situation.
              </p>
              <p>
                In general, we offer a 14-day money-back guarantee for all new subscriptions or services. If you are not
                satisfied with your purchase within the first 14 days, you may request a full refund by contacting our
                support team. After the 14-day period, refunds will be granted at our discretion, based on factors such
                as the reason for the refund request and the length of time since your purchase.
              </p>
              <p>
                Please note that we do not offer refunds for any custom work or services that have already been
                completed, as these represent costs that we have already incurred. Additionally, we reserve the right to
                deny refund requests that we deem to be abusive or fraudulent.
              </p>
              <h2>4. Refund Process</h2>
              <p>
                To request a refund, please contact our support team at
                <a href="#">osh.econnect@gmail.com</a>
                or by submitting a request through our website. Please provide details about your purchase and the
                reason for your refund request. We will review your request and respond within 5 business days.
              </p>
              <p>
                If your refund request is approved, we will issue the refund to the original payment method used for the
                purchase. Please allow up to 10 business days for the refund to be processed and reflected in your
                account.
              </p>
              <h2>5. Exceptions and Limitations</h2>
              <p>
                We reserve the right to make exceptions to this Cancellation and Refund Policy on a case-by-case basis,
                at our sole discretion. Additionally, this policy does not apply to any third-party products or services
                that you may have purchased through our platform, as those are subject to the respective policies of the
                third-party providers.
              </p>
              <h2>6. Changes to this Policy</h2>
              <p>
                We may update this Cancellation and Refund Policy from time to time. If we make material changes, we
                will provide you with at least 30 days' notice prior to the effective date of the changes. Your
                continued use of our Services after the changes become effective constitutes your acceptance of the
                revised policy.
              </p>
              <h2>7. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Cancellation and Refund Policy, please contact our
                support team at
                <a href="#">osh.econnect@gmail.com</a>.{"\n                      "}
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-400">© 2024 Bot Bazaar Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:text-[#55efc4] underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:text-[#55efc4] underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>)
  );
}

function BotIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>)
  );
}
