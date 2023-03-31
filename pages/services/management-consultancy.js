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
                <span className="sr-only">Your Company</span>
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
              Management Consultancy
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Management consultancy involves providing expert advice and
              guidance to businesses and organizations on improving their
              operations, efficiency, and overall performance. Consultants use
              their knowledge and experience to identify problems, develop
              solutions, and implement strategies to help clients achieve their
              goals.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 lg:mx-0 lg:max-w-none">
            <div className="flex flex-col">
              <dt className="font-bold text-gray-900 text-xl">
                Management Accounting Services
              </dt>
              <dd className="mt-1 text-gray-600">
                It’s crucial for any type of business to properly understand
                what’s happening to it on a daily basis. Every entity should
                have the right set of accounting tools to review how their
                business operates. This helps to a great extent in forming
                timely decisions, adopting selective techniques and planning for
                the future. However, it is also necessary to provide the right
                quantity of information at the right time.
                <br />
                <br />
                With our management accounting and MIS-Reports, you will be able
                to better understand how the business is responding to the
                environment at large and how well on track the business with the
                present goals that you have for the year. From budget
                preparation to variance analysis we provide a wide range of
                management reports. You will be able to understand and better
                run your business with a periodic management report.
                <br />
                <br />
                What included in our Management Accounting Service package
                <ul className="list-disc ml-4">
                  <li>Customized dashboard</li>
                  <li>Performance report</li>
                  <li>Ratio analysis</li>
                  <li>Budgeted reports & estimated projections</li>
                  <li>Cost Managerial reports</li>
                  <li>Aging reports</li>
                  <li>Performance analysis</li>
                </ul>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="font-bold text-gray-900 text-xl">
                Franchise Business Strategy Planning
              </dt>
              <dd className="mt-1 text-gray-600">
                Franchise business strategy planning involves the development of
                a comprehensive plan that outlines the key steps required to
                establish, operate, and grow a franchise business. Franchise
                oriented business expansion is a widely accepted business growth
                strategy especially in domains like retail, distributed
                manufacturing, FMCG and food and beverage sectors.
                <br />
                <br />
                ZOLVEBIZ assist the client to find out the right franchise
                models, operation dynamics, franchise partner selection etc
                which are key strategic elements which need clarity and
                insight-based intervention. The right models, operation
                dynamics, franchise partner selection etc are key strategic
                elements which need clarity and insight-based intervention. We
                also support in developing operational franchise contracts,
                process, policies, guidelines and standard operating procedures
                which define Franchise owner and franchisee terms of reference
                to ensure smooth operations and sustainable business growth.
                <br />
                <br />
                ZOLVEBIZ’s franchise business strategy planning includes:
                <ul className="list-disc ml-4">
                  <li>Conducting SWOT analysis</li>
                  <li>Developing mission statement</li>
                  <li>Establishing long term goals</li>
                  <li>Creating marketing plan</li>
                  <li>Establishing financial goals</li>
                  <li>Developing operational plans</li>
                  <li>Review and update the strategy planning</li>
                </ul>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="font-bold text-gray-900 text-xl">
                Business Project Report
              </dt>
              <dd className="mt-1 text-gray-600">
                ZOLVEBIZ’s Business Strategy and Planning Services helps an
                organization to presents an overall picture of a proposed
                business which helps them to ascertain the prospects and future
                of business venture. Our business project reporting enables our
                clients to stay on top of their projects and manage others&apos;
                expectations and it also allow our clients to consistently
                monitor and communicate their project scope, time, budget, and
                progress at any time to anyone who needs to know.
                <br />
                <br />
                ZOLVEBIZ’s Business Project Report includes:
                <ul className="list-disc ml-4">
                  <li>
                    <b>Detailed Project Report:</b> Our detailed project report
                    is a comprehensive document that provides an in-depth
                    analysis of a proposed business project. The report is
                    typically prepared by our team of experts and is intended to
                    provide a detailed assessment of the project&apos;s
                    feasibility, scope, timeline, budget, and potential risks
                    and challenges.
                  </li>
                  <li>
                    <b>Business Process Design & Redesign:</b> Business process
                    design and redesign involve a number of steps, including
                    process mapping, identifying process inputs and outputs,
                    evaluating performance metrics, and testing the new process.
                    Our successful implementation of a new or redesigned process
                    can lead to increased productivity, reduced costs, and
                    improved customer satisfaction.
                  </li>
                </ul>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="font-bold text-gray-900 text-xl">Virtual CFO</dt>
              <dd className="mt-1 text-gray-600">
                ZOLVEBIZ, with our team of experts provide Virtual CFO Services
                to businesses at an affordable cost and it also helps business
                owners to focus on their business instead of tax and regulatory
                compliances.
                <br />
                <br />
                ZOLVEBIZ’s virtual CFO services cover the following areas:
                <ul className="list-disc ml-4">
                  <li>
                    <b>Financial reporting:</b> We help our clients to prepare
                    and analyse financial statements, including income
                    statements, balance sheets, and cash flow statements.
                  </li>
                  <li>
                    <b>Budgeting and forecasting:</b> We assist in developing
                    budgets and forecasts to help our clients to plan for future
                    growth and anticipate financial challenges.
                  </li>
                  <li>
                    <b>Cash flow management:</b> We help our clients to manage
                    their cash flow by forecasting cash inflows and outflows and
                    developing strategies to improve cash flow.
                  </li>
                  <li>
                    <b>Strategic planning:</b> We assist our clients to develop
                    long-term financial strategies to achieve their goals, such
                    as expanding into new markets, launching new products, or
                    raising capital.
                  </li>
                  <li>
                    <b>Risk management:</b> We help our clients to identify and
                    manage financial risks, such as currency fluctuations,
                    interest rate changes, and credit risks.
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
