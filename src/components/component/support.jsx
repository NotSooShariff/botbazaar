import Link from "next/link"
import Navbar from "./navbar";
import Footer from "./footer";

export function CustomerSupport() {
  return (
    (<div className="flex flex-col min-h-[100dvh] bg-gray-950 text-gray-50">
      <Navbar/>
      <main className="flex-1">
        <section className="w-full h-[80vh] py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container max-w-4xl px-4 md:px-6 space-y-8">
            <div className="space-y-2">
              <h1
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#55efc4]">
                Customer Support
              </h1>
              <p className="text-gray-400 md:text-xl">We're here to help you with any questions or issues.</p>
            </div>
            <div className="prose prose-invert space-y-6">
              <p>
                How can we assist you? Our customer support team is available to help you with any questions or issues you may have. Whether
                you need assistance with your account, have a technical problem, or just want to provide feedback, we're
                here to help.
              </p>
              <p>
                You can reach us by email at {' '}
                <a href="mailto:osh.econnect@gmail.com">osh.econnect@gmail.com</a>
                or by submitting a request through our website. We'll do our best to respond to your inquiry within 1
                business day.
              </p>
              <div className="flex justify-left">
                <Link
                  className="inline-flex h-10 items-left justify-center rounded-md bg-[#55efc4] px-6 py-2 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-[#55efc4]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href="https://wa.link/igwqvn">
                  Talk to Support
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
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
