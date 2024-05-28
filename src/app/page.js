import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function Component() {
  return (
    <>
    <div className="flex flex-col min-h-[100dvh] bg-gray-950 text-gray-50">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
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
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div
              className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1
                  className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-[#55efc4]">
                  Unleash the Power of Bots
                </h1>
                <p
                  className="mx-auto max-w-[700px] text-gray-400 md:text-xl dark:text-gray-300">
                  Our bot development platform empowers you to create intelligent and engaging conversational
                  experiences. Streamline your workflows, automate repetitive tasks, and connect with your customers
                  like never before.
                </p>
                
                <div className="pt-4">
                <Link
                  className="inline-flex mr-3 h-9 items-center justify-center rounded-md bg-[#55efc4] px-4 py-2 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-[#55efc4]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#55efc4] disabled:pointer-events-none disabled:opacity-50"
                  href="#">
                  Get Started
                </Link>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-[#55efc4] bg-transparent px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-[#55efc4]/10 hover:text-[#55efc4] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#55efc4] disabled:pointer-events-none disabled:opacity-50"
                  href="#">
                  Learn More
                </Link>
                </div>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
              height="300"
              src="/placeholder.svg"
              width="1270" />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container space-y-12 px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div
                  className="inline-block rounded-lg bg-[#55efc4] px-3 py-1 text-sm text-gray-950">Key Features</div>
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#55efc4]">
                  Elevate Your Bot Development
                </h2>
                <p
                  className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform offers a comprehensive suite of tools and features to streamline your bot development
                  process and deliver exceptional conversational experiences.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-[#55efc4]">Natural Language Processing</h3>
                <p className="text-sm text-gray-400">
                  Leverage advanced NLP capabilities to understand and respond to user inputs with precision and
                  context.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-[#55efc4]">Conversational Flow Management</h3>
                <p className="text-sm text-gray-400">
                  Easily design and implement complex conversational flows to guide users through seamless interactions.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-[#55efc4]">Integrations and Automation</h3>
                <p className="text-sm text-gray-400">
                  Seamlessly integrate your bots with other tools and services, and automate repetitive tasks for
                  increased efficiency.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-[#55efc4]">Analytics and Insights</h3>
                <p className="text-sm text-gray-400">
                  Gain valuable insights into user behavior and bot performance to continuously optimize your
                  conversational experiences.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-[#55efc4]">Multilingual Support</h3>
                <p className="text-sm text-gray-400">
                  Develop bots that can communicate in multiple languages, reaching a wider audience and providing
                  inclusive experiences.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-[#55efc4]">Scalable and Secure Infrastructure</h3>
                <p className="text-sm text-gray-400">
                  Rely on our robust and scalable infrastructure to handle high-volume traffic and ensure the security
                  of your bot deployments.
                </p>
              </div>
            </div>
            <div className="flex justify-center flex-col sm:flex-row items-start gap-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#55efc4] px-8 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-[#55efc4]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#55efc4] disabled:pointer-events-none disabled:opacity-50"
                href="#">
                Contact Sales
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-[#55efc4] bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#55efc4]/10 hover:text-[#55efc4] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#55efc4] disabled:pointer-events-none disabled:opacity-50"
                href="#">
                Learn More
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div
            className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2
                className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#55efc4]">
                Empower Your Business with Intelligent Bots
              </h2>
              <p
                className="mx-auto max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Streamline your operations, enhance customer engagement, and unlock new opportunities with our
                cutting-edge bot development platform.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1 bg-gray-800 border-gray-700 text-gray-50 focus:border-[#55efc4] focus:ring-[#55efc4]"
                  placeholder="Enter your email"
                  type="email" />
                <Button
                  className="bg-[#55efc4] text-gray-950 hover:bg-[#55efc4]/90"
                  type="submit">
                  Sign Up
                </Button>
              </form>
              <p className="text-xs text-gray-400">
                Sign up to get notified when we launch.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
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
    </div>
    </>
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

export default Component