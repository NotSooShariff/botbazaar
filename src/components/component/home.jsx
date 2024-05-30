import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import Navbar from "./navbar";
import Footer from "./footer";
import Image from "next/image";

export function HomePage() {
  return (
    (<div key="1" className="flex flex-col min-h-[100dvh] bg-gray-950 text-gray-50">
      <Navbar/>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div
              className="flex flex-col items-center justify-center gap-4 px-4 sm:px-6 md:px-10">
              <div className="space-y-2 text-center">
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
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-[#55efc4] px-4 py-2 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-[#55efc4]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#55efc4] disabled:pointer-events-none disabled:opacity-50"
                  href="/support">
                  Get Started
                </Link>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-[#55efc4] bg-transparent px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-[#55efc4]/10 hover:text-[#55efc4] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#55efc4] disabled:pointer-events-none disabled:opacity-50"
                  href="/#features">
                  Learn More
                </Link>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
              height="300"
              src="/robots.gif"
              width="1270" />
          </div>
        </section>

        {/* Key Features Section  */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
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
            {/* <div className="flex justify-center flex-col sm:flex-row items-start gap-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#55efc4] px-8 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-[#55efc4]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#55efc4] disabled:pointer-events-none disabled:opacity-50"
                href="/support">
                Contact Sales
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-[#55efc4] bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#55efc4]/10 hover:text-[#55efc4] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#55efc4] disabled:pointer-events-none disabled:opacity-50"
                href="#">
                Learn More
              </Link>
            </div> */}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container space-y-12 px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div
                  className="inline-block rounded-lg bg-[#55efc4] px-3 py-1 text-sm text-gray-950">Our Projects</div>
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#55efc4]">
                  Explore Our Bot Solutions
                </h2>
                <p
                  className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of the innovative bot solutions we've developed for our clients.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-4 p-6 rounded-lg bg-gray-800 h-full">
                <div className="flex items-center gap-4">
                  <div className="grid gap-1">
                    <h3 className="font-semibold">WhatsApp Bot</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <MessagesSquareIcon className="w-4 h-4 fill-[#55efc4]" />
                      <span>Chats & Groups Management</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <Image
                    alt="WhatsApp Automation Bot"
                    className="w-full h-40 object-cover rounded-md"
                    height={200}
                    src="/texting.gif"
                    style={{
                      aspectRatio: "400/200",
                      objectFit: "cover",
                    }}
                    width={400} />
                </div>
                <p className="text-sm text-gray-400">
                  Our WhatsApp automation bot helps businesses streamline their customer support by automatically
                  responding to common inquiries, freeing up your team to focus on more complex issues.
                </p>
              </div>
              <div className="grid gap-4 p-6 rounded-lg bg-gray-800 h-full">
                <div className="flex items-center gap-4">
                  <div className="grid gap-1">
                    <h3 className="font-semibold">Sports Odds Scraper</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <BarChartIcon className="w-4 h-4 fill-[#55efc4]" />
                      <span>Real-time sports odds monitoring</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <Image
                    alt="Sports Odds Scraper"
                    className="w-full h-40 object-cover rounded-md"
                    height={200}
                    src="/sports.gif"
                    style={{
                      aspectRatio: "400/200",
                      objectFit: "cover",
                    }}
                    width={400} />
                </div>
                <p className="text-sm text-gray-400">
                  Our sports odds scraper bot collects and analyzes real-time odds data from multiple sources, providing
                  you with the latest information to make informed betting decisions.
                </p>
              </div>
              <div className="grid gap-4 p-6 rounded-lg bg-gray-800 h-full">
                <div className="flex items-center gap-4">
                  <div className="grid gap-1">
                    <h3 className="font-semibold">Automated Trading Bot</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <BoxIcon className="w-4 h-4 fill-[#55efc4]" />
                      <span>Intelligent trading automation</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <Image
                    alt="Inventory Management Bot"
                    className="w-full h-40 object-cover rounded-md"
                    height={200}
                    src="/stonks.gif"
                    style={{
                      aspectRatio: "400/200",
                      objectFit: "cover",
                    }}
                    width={400} />
                </div>
                <p className="text-sm text-gray-400">
                    Our automated trading bot analyzes market trends, executes trades, and manages your portfolio, maximizing your investment potential with minimal effort.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full bg-[#55efc4] text-gray-950 flex items-center justify-center">
                <FileQuestionIcon className="w-6 h-6" />
              </div>
              <p className="text-gray-400">
                Need a custom solution? We've got you covered.
                <Link className="text-[#55efc4] hover:underline" href="/support">
                  Contact us
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container space-y-12 px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div
                  className="inline-block rounded-lg bg-[#55efc4] px-3 py-1 text-sm text-gray-950">
                  Customer Reviews
                </div>
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#55efc4]">
                  What Our Customers Say
                </h2>
                <p
                  className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied customers and learn how our bot development platform has transformed their
                  businesses.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-4 p-6 rounded-lg bg-gray-800">
                <div className="flex items-center gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="grid">
                    <h3 className="font-semibold">Emily Parker</h3>
                    <div className="flex items-center text-sm text-gray-400">
                      <p>Indie Developer</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  The WhatsApp and Telegram Bots are a breeze to work with. I can focus on the awesome sh*t that I actually want to develop instead of having to 
                  waste my time answering the same question 327 times a day.
                </p>
              </div>
              <div className="grid gap-4 p-6 rounded-lg bg-gray-800">
                <div className="flex items-center gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="grid">
                    <h3 className="font-semibold">Alex Smith</h3>
                    <div className="flex items-center text-sm text-gray-400">
                      <p>Startup Founder</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  Bot Bazaar Inc. has been a game-changer for our business. Cutting down on bulky, slow LLMs for everything and relying on Bot Bazaar feels like
                  selling your old rusty trailer for a Mustang! You really just can't get a feel for the speed till you try em.
                </p>
              </div>
              <div className="grid gap-4 p-6 rounded-lg bg-gray-800">
                <div className="flex items-center gap-4">
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="grid">
                    <h3 className="font-semibold">My Mom</h3>
                    <div className="flex items-center text-sm text-gray-400">
                      <p>Hates Tech</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  Good Kid. Knows what he's doing. I don't understand the technical mumbo jumbo but if I had an issue with my computer, or my television, he's 
                  the person I would ring up. About time he created something to also clean his room though but yeah...
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section  */}
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
                Sign up to get notified when we launch. {' '}
                <Link className="hover:text-[#55efc4] underline underline-offset-2" href="/terms-of-service">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
        
        <Footer/>
      </main>
    </div>)
  );
}

function BarChartIcon(props) {
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
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>)
  );
}


function BoxIcon(props) {
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
      <path
        d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>)
  );
}


function FileQuestionIcon(props) {
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
      <path d="M12 17h.01" />
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
      <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" />
    </svg>)
  );
}


function MessagesSquareIcon(props) {
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
      <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z" />
      <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
    </svg>)
  );
}


function StarIcon(props) {
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
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>)
  );
}
