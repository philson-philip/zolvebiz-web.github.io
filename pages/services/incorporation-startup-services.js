import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.png";
import CorporateServicesImg from "../../public/images/corporate-services.svg";
import IncorporationServicesImg from "../../public/images/incorporation-services.svg";
import RegistrationServicesImg from "../../public/images/registration-services.svg";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Team", href: "/#team" },
  { name: "Contact", href: "/#contact" },
];

const footerNavigation = {
  social: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/zolvebizconsulting/",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/zolvebiz-consulting-group-a18b21266/",
      icon: (props) => (
        <svg
          fill="currentColor"
          height="24px"
          viewBox="0 0 67 67"
          width="24px"
          {...props}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M49.837,48.137V36.425c0-6.275-3.35-9.195-7.816-9.195  c-3.604,0-5.219,1.983-6.119,3.374V27.71h-6.79c0.09,1.917,0,20.427,0,20.427h6.79V36.729c0-0.609,0.044-1.219,0.224-1.655  c0.49-1.22,1.607-2.483,3.482-2.483c2.458,0,3.44,1.873,3.44,4.618v10.929H49.837z M21.959,24.922c2.367,0,3.842-1.57,3.842-3.531  c-0.044-2.003-1.475-3.528-3.797-3.528s-3.841,1.524-3.841,3.528c0,1.961,1.474,3.531,3.753,3.531H21.959z M33,64  C16.432,64,3,50.568,3,34C3,17.431,16.432,4,33,4s30,13.431,30,30C63,50.568,49.568,64,33,64z M25.354,48.137V27.71h-6.789v20.427  H25.354z"
          />
        </svg>
      ),
    },
  ],
};

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8 lg:justify-start"
          aria-label="Global"
        >
          <a href={`/`} className="-m-1.5 p-1.5">
            <span className="sr-only">Zolvebiz</span>
            <Image alt="Zolvebiz" className="w-auto h-12" src={Logo} />
          </a>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
            <Link
              href="https://zolvebiz.substack.com/"
              target="_blank"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Blog
            </Link>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href={`/`} className="-m-1.5 p-1.5">
                <span className="sr-only">Zolvebiz</span>
                <Image alt="Zolvebiz" className="w-auto h-12" src={Logo} />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flow-root mt-6">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6 space-y-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <main className="isolate">
        {/* Hero section */}

        {/* Image section */}
        {/* <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt=""
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          />
        </div> */}

        {/* Values section */}
        <div className="px-6 mx-auto mt-32 max-w-7xl sm:mt-40 lg:px-8">
          <div className="max-w-3xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Incorporation & Startup Services
            </h2>
          </div>
          <div className="flex flex-col space-y-8 mt-14">
            <div className="flex flex-col items-center justify-between w-full mx-auto max-w-7xl sm:flex-row gap-x-10">
              <div className="w-full sm:w-1/2">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                  Corporate Secretarial Services
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-600">
                  ZOLEVBIZ&apos;s Corporate Secretarial services involve
                  providing assistance and expertise in managing the legal and
                  administrative aspects of a company&apos;s corporate
                  governance and compliance obligations. Key areas of focus
                  involves company formation and structuring, compliance with
                  laws and regulations, board support, shareholder
                  communication, statutory compliance, corporate record keeping,
                  corporate governance advisory, corporate restructuring and
                  transactions Overall, our corporate secretarial services play
                  a crucial role in ensuring that a company meets its legal and
                  regulatory obligations, maintains good corporate governance
                  practices, and effectively manages its administrative tasks.
                  By outsourcing these services to as ensure companies to focus
                  on their core business activities while ensuring compliance
                  and proper corporate governance.
                </p>
              </div>
              <div className="w-full mt-6 sm:w-1/2">
                <Image
                  className="w-4/5 mx-auto"
                  src={CorporateServicesImg}
                  alt="Management Services"
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-between w-full mx-auto max-w-7xl sm:flex-row-reverse gap-x-10">
              <div className="w-full sm:w-1/2">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                  Incorporation Services
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-600">
                  ZOLVEBIZ&apos;s incorporation services provide valuable
                  guidance to our clients. When providing incorporation
                  services, our role as a consultant would involve assisting
                  clients in understanding the different types of legal entities
                  available for incorporation, such as companies, limited
                  liability partnership (LLPs), partnerships, and sole
                  proprietorships. We help or clients to choose the most
                  suitable entity based on factors such as liability protection,
                  taxation, ownership structure, and operational requirements.
                  <br />
                  Key aspects of ZOLVEBIZ’s incorporation service:
                </p>
                <ul className="mt-2 ml-4 text-base leading-7 text-gray-600 list-disc">
                  <li>Entity Selection</li>
                  <li>Documentation and Compliance</li>
                  <li>Name and Branding</li>
                  <li>Licensing and permits</li>
                  <li>Tax consideration</li>
                  <li>Ongoing Support</li>
                </ul>
              </div>
              <div className="w-full mt-6 sm:w-1/2">
                <Image
                  className="w-4/5 mx-auto"
                  src={IncorporationServicesImg}
                  alt="Management Services"
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-between w-full mx-auto max-w-7xl sm:flex-row gap-x-10">
              <div className="w-full sm:w-1/2">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                  Registration Services
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-600">
                  ZOLVEBIZ offer various registration services to corporate and
                  non corporate clients, such as
                </p>
                <ul className="mt-2 ml-4 text-base leading-7 text-gray-600 list-disc">
                  <li>Company Registration</li>
                  <li>GST Registration</li>
                  <li>Trade Mark Registration</li>
                  <li>Import Export Code (IEC) Registration</li>
                  <li>Employee Provident Fund (EPF) Registration</li>
                  <li>Professional Licenses and Certifications</li>
                  <li>Intellectual Property Registration</li>
                </ul>
              </div>
              <div className="w-full mt-6 sm:w-1/2">
                <Image
                  className="w-4/5 mx-auto"
                  src={RegistrationServicesImg}
                  alt="Management Services"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 pb-20 mx-auto mt-16 overflow-hidden max-w-7xl sm:mt-24 sm:pb-24 lg:px-8">
        <div className="flex justify-center mt-10 space-x-10">
          {footerNavigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="w-6 h-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-sm leading-5 text-center text-gray-500">
          &copy; 2023 Zolvebiz, Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
