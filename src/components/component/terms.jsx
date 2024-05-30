import Link from "next/link"
import Navbar from "./navbar";

export function Terms() {
  return (
    (<div className="flex flex-col min-h-[100dvh] bg-gray-950 text-gray-50">
      <Navbar/>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container max-w-4xl px-4 md:px-6 space-y-8">
            <div className="space-y-2">
              <h1
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#55efc4]">
                Terms of Service
              </h1>
              <p className="text-gray-400 md:text-xl">Last updated: May 28, 2024</p>
            </div>
            <div className="prose prose-invert space-y-6">
              <h2 className="text-[#55efc4]">1. Introduction</h2>
              <p>
                Welcome to Bot Bazaar Inc. ("Company", "we", "our", "us"). These Terms of Service ("Terms",
                "Agreement") govern your use of our website located at botbuilders.com and any related products or
                services (collectively, "Services").
              </p>
              <p>
                By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you
                disagree with any part of the Terms, then you do not have permission to access the Services.
              </p>
              <h2 className="text-[#55efc4]">2. Intellectual Property</h2>
              <p>
                The Services and its original content, features, and functionality are and will remain the exclusive
                property of Bot Bazaar Inc. and its licensors. The Services are protected by copyright, trademark, and
                other laws of both the United States and foreign countries.
              </p>
              <p>
                Our trademarks and trade dress may not be used in connection with any product or service without the
                prior written consent of Bot Bazaar Inc.
              </p>
              <h2 className="text-[#55efc4]">3. User Accounts and Conduct</h2>
              <p>
                When you create an account with us, you must provide us with information that is accurate, complete, and
                current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate
                termination of your account on our Services.
              </p>
              <p>
                You are responsible for safeguarding the password that you use to access the Services and for any
                activities or actions under your password. You agree not to disclose your password to any third party.
              </p>
              <p>
                You may not use the Services for any illegal or unauthorized purpose. You must not, in the use of the
                Services, violate any laws in your jurisdiction (including but not limited to copyright laws).
              </p>
              <h2 className="text-[#55efc4]">4. Termination</h2>
              <p>
                We may terminate or suspend your account and bar access to the Services immediately, without prior
                notice or liability, under our sole discretion, for any reason whatsoever, including without limitation
                if you breach the Terms.
              </p>
              <p>
                Upon termination, your right to use the Services will immediately cease. If you wish to terminate your
                account, you may simply discontinue using the Services.
              </p>
              <h2 className="text-[#55efc4]">5. Limitation of Liability</h2>
              <p>
                In no event shall Bot Bazaar Inc., nor its directors, employees, partners, agents, suppliers, or
                affiliates, be liable for any indirect, incidental, special, consequential or punitive damages,
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                resulting from (i) your access to or use of or inability to access or use the Services; (ii) any conduct
                or content of any third party on the Services; (iii) any content obtained from the Services; and (iv)
                unauthorized access, use or alteration of your transmissions or content, whether based on warranty,
                contract, tort (including negligence) or any other legal theory, whether or not we have been informed of
                the possibility of such damage, and even if a remedy set forth herein is found to have failed of its
                essential purpose.
              </p>
              <h2 className="text-[#55efc4]">6. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of California, United States,
                without regard to its conflict of law provisions.
              </p>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
                rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining
                provisions of these Terms will remain in effect.
              </p>
              <h2 className="text-[#55efc4]">7. Changes to These Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
                What constitutes a material change will be determined at our sole discretion.
              </p>
              <p>
                By continuing to access or use our Services after any revisions become effective, you agree to be bound
                by the revised Terms. If you do not agree to the new Terms, you are no longer authorized to use the
                Services.
              </p>
              <h2 className="text-[#55efc4]">8. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at{" "}
                <a className="underline underline-offset-2" href="mailto:osh.econnect@gmail.com">osh.econnect@gmail.com</a>.{"\n                        "}
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
