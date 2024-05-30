import Link from "next/link"
import Navbar from "./navbar";
import Footer from "./footer";

export function Privacy() {
  return (
    (<div className="flex flex-col min-h-[100dvh] bg-gray-950 text-gray-50">
      <Navbar/>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container max-w-4xl px-4 md:px-6 space-y-8">
            <div className="space-y-2">
              <h1
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#55efc4]">
                Privacy Policy
              </h1>
              <p className="text-gray-400 md:text-xl">Last updated: May 28, 2024</p>
            </div>
            <div className="prose prose-invert space-y-6">
              <h2 className="text-[#55efc4]"><strong>1. Introduction</strong></h2>
              <p>
                Welcome to Bot Bazaar Inc. ("Company", "we", "our", "us"). This Privacy Policy explains how we
                collect, use, and disclose information about you when you use our website located at botbuilders.com and
                any related products or services (collectively, "Services").
              </p>
              <p>
                By accessing or using our Services, you agree to the terms of this Privacy Policy. If you do not agree
                with the terms of this Privacy Policy, please do not use the Services.
              </p>
              <h2 className="text-[#55efc4]"><strong>2. Information We Collect</strong></h2>
              <p>We collect information about you in the following ways:</p>
              <ul>
                <li>
                  <span className="underline underline-offset-2">Information you provide to us:</span>
                  We collect information that you provide to us directly, such as when you create an account, contact
                  us, or submit content or feedback. This may include your name, email address, and any other
                  information you choose to provide.
                </li>
                <li>
                  <span className="underline underline-offset-2">Information we collect automatically:</span>
                  We collect only basic information such as your IP address and browser type depending on the bot 
                  you're using for functionality and security purposes.
                </li>
              </ul>
              <h2 className="text-[#55efc4]"><strong>3. How We Use Your Information</strong></h2>
              <p>We use the information we collect about you for the following purposes:</p>
              <ul>
                <li>
                  To provide and improve the Services, including to personalize your experience and to communicate with
                  you.
                </li>
                <li>
                  To protect the security and integrity of the Services and our business, and to prevent and investigate
                  fraud or other illegal activities.
                </li>
                <li>
                  To comply with legal and regulatory requirements, and to respond to lawful requests for information.
                </li>
              </ul>
              <h2 className="text-[#55efc4]"><strong>4. Sharing Your Information</strong></h2>
              <p>We may share your information with third parties in the following circumstances:</p>
              <ul>
                <li>
                  With service providers who perform services on our behalf, such as hosting, data analysis, and
                  customer support.
                </li>
                <li>In connection with a merger, acquisition, or sale of all or a portion of our assets.</li>
              </ul>
              <h2 className="text-[#55efc4]"><strong>5. Data Retention and Security</strong></h2>
              <p>
                We retain your information for as long as necessary to fulfill the purposes for which it was collected,
                or as required by law. We implement reasonable security measures to protect your information from
                unauthorized access, use, or disclosure.
              </p>
              <h2 className="text-[#55efc4]"><strong>6. Your Rights and Choices</strong></h2>
              <p>
                You have certain rights and choices with respect to your information, including the right to access,
                correct, or delete your information. You can exercise these rights by contacting us at
                <a href="#">osh.econnect@gmail.com</a>.{"\n                      "}
              </p>
              <h2 className="text-[#55efc4]"><strong>7. Changes to this Privacy Policy</strong></h2>
              <p>
                We may update this Privacy Policy from time to time. If we make material changes, we will provide you
                with at least 30 days' notice prior to the effective date of the changes. Your continued use of the
                Services after the changes become effective constitutes your acceptance of the revised Privacy Policy.
              </p>
              <h2 className="text-[#55efc4]"><strong>8. Contact Us</strong></h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us
                at
                <a href="#">osh.econnect@gmail.com</a>.{"\n                      "}
              </p>
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
