import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Logo from "../../public/images/logo.png";

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
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 lg:justify-start"
          aria-label="Global"
        >
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Zolvebiz</span>
            <Image alt="Zolvebiz" className="h-12 w-auto" src={Logo} />
          </a>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="lg:ml-12 lg:flex lg:gap-x-14 hidden">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Zolvebiz</span>
                <Image alt="Zolvebiz" className="h-12 w-auto" src={Logo} />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
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
        <div className="relative isolate -z-10">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            />
          </svg>
          <div className="absolute top-0 left-1/2 right-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48">
            <svg
              viewBox="0 0 801 1036"
              aria-hidden="true"
              className="w-[50.0625rem]"
            >
              <path
                fill="url(#70656b7e-db44-4b9b-b7d2-1f06791bed52)"
                fillOpacity=".3"
                d="m282.279 843.371 32.285 192.609-313.61-25.32 281.325-167.289-58.145-346.888c94.5 92.652 277.002 213.246 251.009-45.597C442.651 127.331 248.072 10.369 449.268.891c160.956-7.583 301.235 116.434 351.256 179.39L507.001 307.557l270.983 241.04-495.705 294.774Z"
              />
              <defs>
                <linearGradient
                  id="70656b7e-db44-4b9b-b7d2-1f06791bed52"
                  x1="508.179"
                  x2="-28.677"
                  y1="-116.221"
                  y2="1091.63"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Image section */}
        {/* <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt=""
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          />
        </div> */}

        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-3xl lg:mx-0">
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
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 lg:mx-0 lg:max-w-none">
            <div className="flex flex-col">
              <dt className="font-bold text-gray-900 text-xl">
                Tax Compliances
              </dt>
              <dd className="mt-1 text-gray-600">
                Ensuring that your business is in compliance with statutory and
                regulatory requirements can be a confusing and tiresome task,
                especially if you don’t have the right resources. Once an entity
                is registered for tax authorizes, it is mandatory that they meet
                the periodic deadlines set by the authorities. Having a
                dedicated team for tax compliance can be quite expensive for
                start- ups and small businesses. For a large business, the
                problem could be retaining such well-trained staff.
                <br />
                <br />
                ZOLVEBIZ help our clients to efficiently manage the tax
                compliances to avoid future penalties for erroneous or
                non-disclosures in the tax forms.
                <br />
                <br />
                ZOLVEBIZ’s tax compliance services include:
                <ul className="list-disc ml-4">
                  <li>
                    Preparation and review of tax computation, periodic tax
                    return and comments on tax positions adopted by clients.
                  </li>
                  <li>Preparation and review of quarterly e-TDS returns.</li>
                  <li>
                    Preparation and review of monthly or quarterly GST returns.
                  </li>
                  <li>
                    Obtaining various tax registrations, such as PAN, TAN, TIN,
                    GST etc from the tax authorities.
                  </li>
                  <li>
                    Assistance in conducting periodical review of tax
                    compliances under the Income Tax Law and GST Laws.
                  </li>
                  <li>Manage certificates.</li>
                  <li>
                    Responding to officials communications on your behalf.
                  </li>
                  <li>Any other related compliances matters.</li>
                </ul>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="font-bold text-gray-900 text-xl">
                Income Tax & GST Advisory
              </dt>
              <dd className="mt-1 text-gray-600">
                ZOLVEBIZ team for tax advisory services help corporate and
                non-corporate clients to navigate complex tax regulations,
                minimize their tax liabilities and comply with tax laws to stay
                compliant with tax laws and regulations and avoid penalties and
                legal consequences. ZOLVEBIZ also provide strategic guidance to
                help our clients achieve their financial goals and manage their
                tax risks. We provide our services on an ongoing basis or on a
                project basis, depending on the needs of our clients.
                <br />
                <br />
                ZOLVEBIZ’s common areas of focus for tax advisory services
                include:
                <ul className="list-disc ml-4">
                  <li>
                    Tax planning and Optimization: We advise our clients on tax
                    planning strategies that can help them minimize their tax
                    liabilities.
                  </li>
                  <li>
                    Compliance: Assisting our clients in complying with tax laws
                    and regulations, including preparing and filing tax returns,
                    responding to tax audits, and resolving tax disputes.
                  </li>
                  <li>
                    International Tax: We advise our clients on cross-border tax
                    issues related to global operations, including transfer
                    pricing, withholding tax and tax treaty provisions.
                  </li>
                  <li>
                    Mergers & Acquisitions: Advising our clients on tax
                    implications of mergers and acquisitions, including due
                    diligence and structuring transactions to minimize tax
                    liabilities.
                  </li>
                  <li>
                    Employee Compensation: We advise our clients on
                    tax-efficient ways to compensate employees, including
                    equity-based compensation plans.
                  </li>
                </ul>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="font-bold text-gray-900 text-xl">
                SEZ Compliance
              </dt>
              <dd className="mt-1 text-gray-600">
                Special Economic Zones (SEZs) are designated areas within a
                country that are created to promote economic growth by offering
                various tax incentives and other benefits to businesses. To
                operate within an SEZ, businesses must comply with certain
                regulations and compliances.
                <br />
                <br />
                ZOLVEBIZ’s SEZ compliances includes the following
                <ul className="list-disc ml-4">
                  <li>
                    <b>Registration:</b> We assists clients in registering their
                    businesses with the SEZ authority to obtain approval to
                    operate within the zone.
                  </li>
                  <li>
                    <b>Compliance with laws and regulations:</b> We ensures that
                    clients comply with all applicable laws and regulations,
                    including labour laws, environmental laws, and customs
                    regulations.
                  </li>
                  <li>
                    <b>Tax compliance:</b> We assists clients in complying with
                    tax regulations and submitting regular reports to the SEZ
                    authority to maintain eligibility for tax incentives.
                  </li>
                  <li>
                    <b>Reporting requirements:</b> We help our clients in
                    submitting regular reports to the SEZ authority, including
                    financial reports, progress reports, and compliance reports.
                  </li>
                  <li>
                    <b>Customs compliance:</b> We ensures that clients comply
                    with customs regulations, including import and export
                    procedures, documentation, and related requirements.
                  </li>
                  <li>
                    <b>Environmental compliance:</b> We assists clients in
                    complying with environmental regulations, including waste
                    disposal, pollution control, and other related requirements.
                  </li>
                </ul>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="font-bold text-gray-900 text-xl">
                Foreign Exchange and RBI Compliance
              </dt>
              <dd className="mt-1 text-gray-600">
                Foreign exchange and Reserve Bank of India (RBI) compliances are
                important for businesses that engage in international
                transactions or have foreign investment. RBI is the central bank
                of India, responsible for regulating foreign exchange
                transactions in the country.
                <br />
                <br />
                ZOLVEBIZ’s foreign exchange and RBI compliances service
                includes:
                <ul className="list-disc ml-4">
                  <li>
                    We help our clients to file the Foreign Currency and/or
                    Convertible Instrument (FCGPR) form with the RBI for any
                    foreign investment in an Indian company.
                  </li>
                  <li>
                    We assist our clients in filing the FCTRS form with the RBI
                    in case of any transfer of shares or convertible securities
                    between a resident and a non-resident.
                  </li>
                  <li>
                    We help clients comply with the regulations under FEMA,
                    including obtaining necessary approvals and reporting
                    requirements.
                  </li>
                  <li>
                    We assist our clients in reporting foreign exchange
                    transactions, including inward and outward remittances, to
                    the RBI through designated reporting platforms.
                  </li>
                  <li>
                    We help our clients comply with AML regulations and report
                    any suspicious transactions to the appropriate authorities.
                  </li>
                  <li>
                    We assist our clients in complying with KYC regulations by
                    identifying and verifying the identity of their customers
                    and maintaining records of transactions.
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </main>

      {/* Footer */}
      <footer className="mx-auto mt-16 max-w-7xl overflow-hidden px-6 pb-20 sm:mt-24 sm:pb-24 lg:px-8">
        <div className="mt-10 flex justify-center space-x-10">
          {footerNavigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2023 Zolvebiz, Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
