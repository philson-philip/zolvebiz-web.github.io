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
          <a href={`/`} className="-m-1.5 p-1.5">
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
              <a href={`/`} className="-m-1.5 p-1.5">
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
              Financial & Accounting
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Financial & accounting services involve the management of
              financial information, including financial reporting, bookkeeping,
              and tax preparation. These services are critical to ensuring that
              businesses maintain accurate financial records and comply with
              relevant regulations.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 lg:mx-0 lg:max-w-none">
            <div className="flex flex-col">
              <dt className="font-bold text-gray-900 text-xl">
                Internal Audit Services
              </dt>
              <dd className="mt-1 text-gray-600">
                Internal audit is an independent, objective assurance and
                consulting activity designed to add value and improve an
                organization&apos;s operations. Our primary goal as an internal
                audit is to help our clients achieve its objectives by bringing
                a systematic, disciplined approach to evaluating and improving
                the effectiveness of its risk management, control, and
                governance processes.
                <br />
                <br />
                ZOLVEBIZ&apos;s internal audit activities include reviewing
                financial statements, assessing the effectiveness of internal
                controls, evaluating compliance with laws and regulations,
                identifying areas of potential risk, and making recommendations
                for improvement. We provide consulting services to help our
                clients to improve processes, reduce costs, and increase
                efficiency.
                <br />
                <br />
                The internal audit function is an essential component of a
                company&apos;s governance structure, and its role is critical in
                providing assurance to stakeholders that an organization&apos;s
                operations are managed effectively and efficiently.
                <br />
                <br />
                ZOLVEBIZ is having a team of professionals who can handle the
                risk advisory, corporate advisory services and regulatory
                compliance business line. At ZOLVEBIZ, we believe in working
                closely with our clients but maintaining the independent lens so
                that we can bring forth the befitting solutions to business
                problems.
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="font-bold text-gray-900 text-xl">
                Accounting Advisory Services
              </dt>
              <dd className="mt-1 text-gray-600">
                ZOLVEBIZ’s accounting advisory services include professional
                services provided to assist organizations with a range of
                financial and accounting issues. Our services are typically
                offered to businesses, governments, and other organizations
                seeking to enhance their financial management capabilities,
                improve their internal control systems, or navigate complex
                accounting regulations.
                <br />
                <br />
                Our accounting advisory services include:
                <ul className="list-disc ml-4">
                  <li>
                    Financial Reporting and Accounting Standard Implementation -
                    Assisting clients in implementation of new accounting
                    standards, such as IFRS or US GAAP and ensuring compliance
                    with relevant reporting requirements.
                  </li>
                  <li>
                    Transaction Advisory Services – Providing due diligence,
                    valuation and financial analysis for mergers, acquisitions
                    and divestitures.
                  </li>
                  <li>
                    InternalControlandRiskManagement-Evaluatingandimprovinginternal
                    controls and risk management systems to minimize financial
                    risk and fraud.
                  </li>
                  <li>
                    Forensic Accounting – Investigating and detecting fraudulent
                    activities, embezzlement and financial irregularities.
                  </li>
                  <li>
                    Sustainability Reporting and Assurance – Assisting clients
                    with sustainability reporting including greenhouse gas
                    emissions and environmental, social, and governance (ESG)
                    performance and providing assurance on the accuracy of
                    sustainable disclosures.
                  </li>
                </ul>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="font-bold text-gray-900 text-xl">
                Bookkeeping Services
              </dt>
              <dd className="mt-1 text-gray-600">
                Dedicated team of ZOLVEBIZ are trained and well experienced in
                preparing detailed financials from minimal documents. Our team
                is capable of meeting your business bookkeeping needs. We will
                ensure that all the transactions occurring in your business are
                properly and quickly captured in your preferred accounting
                software and that you are continuously kept up-to-date about the
                position of your business.
                <br />
                <br />
                We always recommend using online accounting software like Xero,
                QBO, Zoho Books so that you have access to your company records
                whenever and wherever you want and some of these applications
                also provide mobile app support. Even if you don’t use any of
                the mentioned software, our team will support you by making the
                best of the application you are currently using.
                <br />
                <br />
                What included in our bookkeeping & accounting service packages
                <ul className="list-disc ml-4">
                  <li>Management Accounts</li>
                  <li>Financial Statements</li>
                  <li>InventoryManagement</li>
                  <li>PayrollServices</li>
                  <li>Tax Return Preparation</li>
                  <li>Cash Flow Management</li>
                  <li>Accounts Payable</li>
                  <li>Accounts Receivables</li>
                  <li>Business Activity Statement</li>
                </ul>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="font-bold text-gray-900 text-xl">
                Payroll Management
              </dt>
              <dd className="mt-1 text-gray-600">
                Outsourcing payroll allows employers and organizations to focus
                on their core business activities and frees up the business
                owner, HR department or accounting team. Irrespective of the
                number of your employees, attending to payroll need a
                significant time and effort.
                <br />
                <br />
                Efficient management of payroll has become a success factor for
                every organization in order to achieve its organizational goals
                and productivity. An effective and expert outsourced payroll
                management team can and helps a business organization to
                simplify payroll, boost productivity, and improve administration
                and ultimately cost saving and increased profitability.
                <br />
                <br />
                So in this regard, ZOLVEBIZ team will manage your entire payroll
                process to make it more secure, timely and make sure that you
                meet your responsibilities on time.
                <br />
                <br />
                Our services cover the following:
                <ul className="list-disc ml-4">
                  <li>Updating and analyzing time records</li>
                  <li>Calculating payments</li>
                  <li>TDS compliances</li>
                  <li>Reconciliation payroll with bank and actual payments</li>
                </ul>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="font-bold text-gray-900 text-xl">
                Audit Support Services
              </dt>
              <dd className="mt-1 text-gray-600">
                Audit support services refer to services provided to assist
                individuals or businesses during an audit. ZOLVEBIZ’s audit
                support services are designed to help our clients to prepare for
                an audit, as well as respond to inquiries and requests from the
                auditor.
                <br />
                <br />
                ZOLVEBIZ’s team has relevant experience in handling the audit of
                large organizations. Our team can assist our client in
                completing audits in a time bound manner with no pain to the
                internal finance and account team.
                <br />
                <br />
                Our audit support services include:
                <ul className="list-disc ml-4">
                  <li>
                    Reviewing financial records and preparing documentation that
                    the auditor may request during the audit.
                  </li>
                  <li>
                    Providing information and responding to inquiries from the
                    auditor in a timely manner.
                  </li>
                  <li>
                    Organizing and managing the financial records and documents
                    required for the audit.
                  </li>
                  <li>
                    Reviewing the auditor&apos;s findings and recommendations
                    and developing a plan to address any issues identified.
                  </li>
                  <li>
                    Addressing any recommendations made by the auditor and
                    implementing corrective actions to improve the financial
                    controls and compliance of the organization
                  </li>
                </ul>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="font-bold text-gray-900 text-xl">
                Business Valuation
              </dt>
              <dd className="mt-1 text-gray-600">
                Business Valuation process typically involves an examination of
                financial statements, company history, market trends, and other
                relevant factors to determine the economic value of business or
                company. ZOLVEBIZ is having a team of professional appraisers,
                analysts and registered valuer to determine the value of the
                business, as it provides a means to estimate the worth of the
                company, which is essential in a variety of situations,
                including mergers and acquisitions, partnership disputes, estate
                planning, taxation, and legal proceedings.
                <br />
                <br />
                ZOLVEBIZ’s valuation professionals may also consider other
                factors such as market trends, financial statements, management
                capability, intellectual property, and competition when
                determining the value of a business. In addition, the valuation
                process may involve adjusting financial statements to reflect
                the fair value of assets and liabilities. Our business valuation
                process is helpful for those companies looking to make strategic
                decisions about their future, as it provides a clear
                understanding of the worth of the business and its potential for
                growth.
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
