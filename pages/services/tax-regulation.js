import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.png";
import ManagementServicesImg from "../../public/images/management.svg";
import TaxImg from "../../public/images/tax.svg";

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
      name: "Facebook",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
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
      name: "Twitter",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
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
              Tax & Regulation
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Tax & regulation are important factors that affect businesses and
              individuals, as they determine the amount of taxes to be paid and
              the rules that must be followed to avoid penalties and legal
              issues. Consulting services in this area can help navigate the
              complexities of tax and regulatory compliance, reducing risks and
              maximizing benefits.
            </p>
          </div>
          <div className="flex flex-col space-y-8 mt-14">
            <div className="flex flex-col items-center justify-between w-full mx-auto max-w-7xl sm:flex-row gap-x-10">
              <div className="w-full sm:w-1/2">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                  Foreign Exchange & RBI Compliance
                </h3>
                <p className="mt-3 text-base font-light leading-relaxed text-gray-600">
                  ZOLVEBIZ provides foreign exchange and Reserve Bank of India
                  (RBI) compliance services to ensure businesses comply with all
                  regulations and requirements related to international
                  transactions and foreign investments. We help our clients with
                  filing forms, obtaining approvals, and reporting foreign
                  exchange transactions to RBI. We also assist with AML
                  regulations, reporting suspicious transactions, and adhering
                  to KYC regulations. Our services include filing FCGPR and
                  FCTRS forms for foreign investment and transfer of shares,
                  obtaining approvals, and meeting reporting requirements under
                  FEMA regulations.
                </p>
              </div>
              <div className="w-full mt-6 sm:w-1/2">
                <Image
                  className="w-4/5 mx-auto"
                  src={ManagementServicesImg}
                  alt="Management Services"
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-between w-full mx-auto max-w-7xl sm:flex-row-reverse gap-x-10">
              <div className="w-full sm:w-1/2">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                  Income Tax & GST Advisory Services
                </h3>
                <p className="mt-3 text-base font-light leading-relaxed text-gray-600">
                  ZOLVEBIZ provides tax advisory services to corporate and
                  non-corporate clients, helping them comply with tax laws and
                  regulations, minimize tax liabilities, and manage tax risks.
                  Our services include tax planning and optimization, compliance
                  assistance, international tax, mergers and acquisitions, and
                  employee compensation. Our team advises on strategies to
                  minimize tax liabilities, assists with compliance, advises on
                  cross-border tax issues, provides due diligence and
                  structuring advice, and advises on tax-efficient employee
                  compensation plans.
                </p>
              </div>
              <div className="w-full mt-6 sm:w-1/2">
                <Image
                  className="w-4/5 mx-auto"
                  src={TaxImg}
                  alt="Management Services"
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-between w-full mx-auto max-w-7xl sm:flex-row gap-x-10">
              <div className="w-full sm:w-1/2">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                  SEZ Compliance
                </h3>
                <p className="mt-3 text-base font-light leading-relaxed text-gray-600">
                  ZOLVEBIZ offers SEZ compliance services to assist businesses
                  in operating within Special Economic Zones while complying
                  with applicable regulations. Our service includes registering
                  with the SEZ authority, complying with labour and
                  environmental laws, maintaining eligibility for tax
                  incentives, and submitting regular reports. Our team ensures
                  compliance with customs and environmental regulations, freeing
                  up businesses to focus on their core operations.
                </p>
              </div>
              <div className="w-full mt-6 sm:w-1/2">
                <Image
                  className="w-4/5 mx-auto"
                  src={ManagementServicesImg}
                  alt="Management Services"
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-between w-full mx-auto max-w-7xl sm:flex-row-reverse gap-x-10">
              <div className="w-full sm:w-1/2">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                  Tax Compliance
                </h3>
                <p className="mt-3 text-base font-light leading-relaxed text-gray-600">
                  ZOLVEBIZ provides tax compliance services to assist businesses
                  in meeting their statutory and regulatory tax requirements.
                  Our services include preparation and review of income tax
                  returns, e- TDS returns, and GST returns, and obtaining tax
                  registrations. We also conduct periodic reviews of tax
                  compliances and assists with any other related matters.
                  ZOLVEBIZ’s services helps businesses avoid penalties and
                  ensure efficient management of tax compliance.
                </p>
              </div>
              <div className="w-full mt-6 sm:w-1/2">
                <Image
                  className="w-4/5 mx-auto"
                  src={TaxImg}
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
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="w-6 h-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-xs leading-5 text-center text-gray-500">
          &copy; 2023 Zolvebiz, Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
