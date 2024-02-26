import ContactUsImg from "../public/images/contact-us.avif";
import LogoImg from "../public/images/logo.png";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <div className="relative bg-gray-900" id="contact">
        <div className="relative overflow-hidden bg-indigo-600 h-80 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
          <Image
            className="object-cover w-full h-full"
            src={ContactUsImg}
            alt="Contact Us"
          />
          <svg
            viewBox="0 0 926 676"
            aria-hidden="true"
            className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
          >
            <path
              fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
              fillOpacity=".4"
              d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
            />
            <defs>
              <linearGradient
                id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
                x1="926.392"
                x2="-109.635"
                y1=".176"
                y2="321.024"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#776FFF" />
                <stop offset={1} stopColor="#FF4694" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-20">
          <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              We’re here to help
            </p>
            <p className="mt-6 text-base leading-7 text-gray-300">
              Contact our consultancy firm today for expert advice and tailored
              solutions to optimize your business&apos;s financial success.
              Reach out now and let us help you thrive.
            </p>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-white">Office Address</h3>
              <div className="mt-2 space-y-1 text-base text-gray-300">
                <p>55/2934, J& L Arcade, 1st cross</p>
                <p>Cheruparambathu Road, Kadavanthra</p>
                <p>Kochi, Kerala - 682020</p>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-white">Support</h3>
              <div className="flex mt-2">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <div className="ml-3 text-base text-gray-300">
                  <p>+91 6282800328</p>
                </div>
              </div>
              <div className="flex mt-2">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <div className="ml-3 text-base text-gray-300">
                  <p>+91 9745380701</p>
                </div>
              </div>
              <div className="flex mt-2">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div className="ml-3 text-base text-gray-300">
                  <p>info@zolvebiz.com</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="tel:+916282800328"
                className="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Hop on a call
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
